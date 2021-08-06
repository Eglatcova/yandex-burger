import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { postAuth } from "../sevices/actions/user.js";
import { FormWrap } from "../components/form-wrap/form-wrap";

export function LoginPage() {
  const history = useHistory();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const onClickLogin = (e) => {
    dispatch(postAuth(email, password)).then(() => {
      history.replace({ pathname: "/" });
    });
  };

  return (
    <FormWrap>
      <h3 className={`text text_type_main-medium`}>Вход</h3>
      <div className={`mt-6`}>
        <EmailInput onChange={onChangeEmail} value={email} name={"email"} />
      </div>
      <div className={`mt-6`}>
        <PasswordInput
          onChange={onChangePassword}
          value={password}
          name={"password"}
        />
      </div>
      <div className={`mt-6`}>
        <Button type="primary" size="medium" onClick={onClickLogin}>
          Войти
        </Button>
      </div>
      <p className={`text text_type_main-default text_color_inactive mt-20`}>
        Вы — новый пользователь?{" "}
        <NavLink to="/register" className={`hrefBlue`}>
          Зарегистрироваться
        </NavLink>
      </p>
      <p className={`text text_type_main-default text_color_inactive mt-4`}>
        Забыли пароль?{" "}
        <NavLink to="/forgot-password" className={`hrefBlue`}>
          Восстановить пароль
        </NavLink>
      </p>
    </FormWrap>
  );
}
