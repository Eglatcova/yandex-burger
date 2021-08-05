import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { FormWrap } from "../components/form-wrap/form-wrap";

export function LoginPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const { email, password } = data;

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
        <Button type="primary" size="medium">
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
