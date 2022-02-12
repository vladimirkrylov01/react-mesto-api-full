import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function Login({
  loggedIn, setSuccessRegister, onLogin, setCurrentRoute, history,
}) {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  function handleChangeLoginData(evt) {
    const { name, value } = evt.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onLogin({ loginData, setLoginData });
  }

  useEffect(() => {
    if (loggedIn) history.push('/');
  }, [loggedIn]);

  useEffect(() => {
    setSuccessRegister(false);
    setCurrentRoute('/signin');
  }, []);

  return (
    <div className="sign__container">
      <form action={ "/signin" } className="form" onSubmit={handleSubmit}>
        <h3 className="form__title form__title_place_sign">Вход</h3>
        <fieldset className="form__input-container form__input-container">
          <input
            type="email"
            className="form__item form__item_place_sign"
            placeholder="Email"
            name="email"
            value={loginData.email || ''}
            onChange={handleChangeLoginData}
          />

          <input
            type="password"
            className="form__item form__item_place_sign"
            placeholder="Пароль"
            name="password"
            value={loginData.password || ''}
            onChange={handleChangeLoginData}
          />
        </fieldset>

        <button type="submit" className="form__submit form__button_place_sign">Войти</button>
      </form>
      <p className="sign__registred">
        Нет аккаунта?
        {' '}
        <Link to="/signup" rel="noreferrer" className="sign__login-link">
          Регистрация
        </Link>
      </p>
    </div>
  );
}

export default Login;
