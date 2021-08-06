import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { postRegister } from "../sevices/actions/user.js";
import { FormWrap } from "../components/form-wrap/form-wrap";

export function RegisterPage() {
  const { auth } = useSelector((store) => ({
    auth: store.user.auth,
  }));

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = data;

  const dispatch = useDispatch();

  const onChangeName = (e) => {
    setData({ ...data, name: e.target.value });
  };

  const onChangeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const onClickRegister = (e) => {
    dispatch(postRegister(name, email, password));
  };

  if (auth) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }

  return (
    <FormWrap>
      <h3 className={`text text_type_main-medium`}>Регистрация</h3>
      <div className={`mt-6`}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
          value={name}
          name={"name"}
        />
      </div>

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
        <Button type="primary" size="medium" onClick={onClickRegister}>
          Зарегистрироваться
        </Button>
      </div>
      <p className={`text text_type_main-default text_color_inactive mt-20`}>
        Уже зарегистрированы??{" "}
        <NavLink to="/login" className={`hrefBlue`}>
          Войти
        </NavLink>
      </p>
    </FormWrap>
  );
}
