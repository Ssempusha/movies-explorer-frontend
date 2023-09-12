class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Произошла ошибка: ${res.status}`);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      credentials: "include",
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("userId")}`,
        "Content-type": "application/json",
      },
    }).then((res) => this._checkResponse(res));
  }

  setInfoProfile({ name, email }) {
    return fetch(`${this._url}/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        authorization: `Bearer ${localStorage.getItem("userId")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then((res) => this._checkResponse(res));
  }

  addMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${localStorage.getItem("userId")}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
      }),
      credentials: "include",
    }).then((res) => this._checkResponse(res));
  }

  getSaveMovies() {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("userId")}`,
        "Content-type": "application/json",
      },
      credentials: "include",
    }).then((res) => this._checkResponse(res));
  }

  deleteMovie(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("userId")}`,
        "Content-type": "application/json",
      },
      credentials: "include",
    }).then((res) => this._checkResponse(res));
  }
}

export const mainApi = new Api({
  url: "api.moviessempusha.nomoreparties.co",
  headers: {
    authorization: `Bearer ${localStorage.getItem("userId")}`,
    "Content-Type": "application/json",
  },
});
