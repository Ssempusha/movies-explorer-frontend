import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import "./App.css";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import * as auth from "../../utils/auth";
import { mainApi } from "../../utils/MainApi";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [renderLoading, setrenderLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [savedMovies, setSavedMovies] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  function handleLoginTrueStatus() {
    setLoggedIn(true);
  }

  useEffect(() => {
    mainApi.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  const handleLogin = (email, password) => {
    setrenderLoading(true);
    auth
      .authorization(email, password)
      .then((data) => {
        if (data.token) localStorage.setItem("userId", data.token);
        handleLoginTrueStatus();
        setSuccess(true);
        setSubmitStatus("Вы успешно вошли в аккаунт.");
        navigate("/movies");
      })
      .catch((err) => {
        setSuccess(false);
        if (err === "Произошла ошибка: 401") {
          setSubmitStatus("Вы ввели неправильный логин или пароль.");
        } else {
          setSubmitStatus("При входе в аккаунт произошла ошибка.");
        }
        console.log(err);
      })
      .finally(() => {
        setrenderLoading(false);
      });
  };

  const handleRegister = (name, email, password) => {
    setrenderLoading(true);
    auth
      .register(name, email, password)
      .then(() => {
        setSuccess(true);
        setSubmitStatus("Вы успешно зарегистрировались.");
        handleLogin(email, password);
        navigate("/movies");
      })
      .catch((err) => {
        setSuccess(false);
        if (err === "Произошла ошибка: 400") {
          setSubmitStatus("Переданы некорректные данные для регистрации.");
        } else if (err === "Произошла ошибка: 409") {
          setSubmitStatus("Пользователь с таким e-mail уже существует.");
        } else {
          setSubmitStatus("При регистрации произошла ошибка.");
        }
        console.log(err);
      })
      .finally(() => {
        setrenderLoading(false);
      });
  };

  const tokenCheck = () => {
    const token = localStorage.getItem("userId");
    if (token) {
      auth
        .tokenCheck()
        .then((res) => {
          handleLoginTrueStatus();
          navigate(location.pathname, { replace: true });
        })
        .catch((err) => {
          console.log(err);
          navigate("/signin");
        });
    }
  };

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  function handleSignOut() {
    auth
      .signOut()
      .then((res) => {
        setCurrentUser({});
        localStorage.clear();
        setLoggedIn(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(data) {
    setrenderLoading(true);
    mainApi
      .setInfoProfile(data)
      .then((res) => {
        setCurrentUser(res);
        setSuccess(true);
        setSubmitStatus("Данные профиля изменены.");
      })
      .catch((err) => {
        setSuccess(false);
        if (err === "Произошла ошибка: 409") {
          setSubmitStatus("Пользователь с таким e-mail уже существует.");
        } else {
          setSubmitStatus("При обновлении профиля произошла ошибка.");
        }
        console.log(err);
      })
      .finally(() => {
        setrenderLoading(false);
      });
  }

  const filterDurationMovies = (movies) => {
    return movies.filter((movie) => movie.duration <= 40);
  };

  const filterNameMovies = (movies, text) => {
    const lowerCaseText = text.toLowerCase();

    return movies.filter((movie) => {
      const { nameRU, nameEN } = movie;
      return (
        nameRU.toLowerCase().includes(lowerCaseText) ||
        nameEN.toLowerCase().includes(lowerCaseText)
      );
    });
  };

  const handleSaveMovie = (movie) => {
    mainApi
      .addMovie(movie)
      .then((saveMovie) => {
        setSavedMovies([...savedMovies, saveMovie]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getSaveMovies()
        .then((movies) => {
          setSavedMovies(movies);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  const handleDeleteMovie = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const newSavedMovies = savedMovies.filter(({ _id }) => _id !== movieId);
        setSavedMovies(newSavedMovies);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="body">
        <div className="page">
          <Routes>
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            {!loggedIn ? (
              <>
                <Route
                  path="/signin"
                  element={
                    <Login
                      onLogin={handleLogin}
                      renderLoading={renderLoading ? "Вход..." : "Войти"}
                      success={success}
                      submitStatus={submitStatus}
                    />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <Register
                      onRegister={handleRegister}
                      renderLoading={
                        renderLoading ? "Регистрация..." : "Зарегистрироваться"
                      }
                      success={success}
                      submitStatus={submitStatus}
                    />
                  }
                />
              </>
            ) : null}

            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  loggedIn={loggedIn}
                  filterNameMovies={filterNameMovies}
                  filterDurationMovies={filterDurationMovies}
                  savedMovies={savedMovies}
                  onSaveMovies={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  element={SavedMovies}
                  loggedIn={loggedIn}
                  filterNameMovies={filterNameMovies}
                  savedMovies={savedMovies}
                  onDeleteMovie={handleDeleteMovie}
                  filterDurationMovies={filterDurationMovies}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  onSignOut={handleSignOut}
                  onUpdateUser={handleUpdateUser}
                  renderLoading={renderLoading ? "Сохранение..." : "Сохранить"}
                  success={success}
                  submitStatus={submitStatus}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
