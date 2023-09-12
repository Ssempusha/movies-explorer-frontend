import { useState } from "react";
const useForm = () => {
  const emailRegex = /^([a-z0-9_.-]+)@([a-z0-9_.-]+)\.([a-z.]{2,6})$/;
  const [data, setData] = useState({});
  const [isValid, setIsValid] = useState({});
  const [errors, setErrors] = useState({});

  function checkValid(name, value) {
    if (name === "email") {
      if (emailRegex.test(value)) {
        setIsValid({ ...isValid, email: true });
        setErrors({ ...errors, email: "" });
      } else if (value === "") {
        setIsValid({ ...isValid, email: false });
        setErrors({ ...errors, email: "Введите e-mail" });
      } else {
        setIsValid({ ...isValid, email: false });
        setErrors({ ...errors, email: "Некорректный e-mail" });
      }
    } else if (name === "password") {
      if (value.length >= 8) {
        setIsValid({ ...isValid, password: true });
        setErrors({ ...errors, password: "" });
      } else if (value === "") {
        setIsValid({ ...isValid, password: false });
        setErrors({ ...errors, password: "Введите пароль" });
      } else {
        setIsValid({ ...isValid, password: false });
        setErrors({ ...errors, password: "Длина пароля от 8 до 30 символов" });
      }
    } else if (name === "name") {
      if (value.length >= 2 && value.length <= 30) {
        setIsValid({ ...isValid, name: true });
        setErrors({ ...errors, name: "" });
      } else if (value === "") {
        setIsValid({ ...isValid, name: false });
        setErrors({ ...errors, name: "Введите имя" });
      } else {
        setIsValid({ ...isValid, name: false });
        setErrors({ ...errors, name: "Длина имени от 2 до 30 символов" });
      }
    }
  }

  function handleChange(e) {
    const {
      target: { name, value },
    } = e;
    setData({ ...data, [name]: value });
    checkValid(name, value);
  }

  return {
    handleChange,
    errors,
    data,
    isValid,
    checkValid,
  };
};

export default useForm;
