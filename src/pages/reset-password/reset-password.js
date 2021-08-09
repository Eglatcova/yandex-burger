import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getCookie } from "../../utils/getCookie";
import { deleteCookie } from "../../utils/deleteCookie";

import { FormWrap } from "../../components/form-wrap/form-wrap";

export function ResetPassword() {
  const forgotCookie = getCookie("updPass");
  const { auth } = useSelector((store) => ({
    auth: store.user.auth,
  }));

  const [data, setEmail] = useState({
    password: "",
    token: "",
  });

  const onChangePassword = (e) => {
    setEmail({ ...data, password: e.target.value });
  };

  const onChangeToken = (e) => {
    setEmail({ ...data, token: e.target.value });
  };
  const { password, token } = data;

  //запрос к апи, создание нового пароля
  const postResetPass = async (userPassword, userToken) => {
    let response = await fetch(
      "https://norma.nomoreparties.space/api/password-reset/reset",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: userPassword,
          token: userToken,
        }),
      }
    ).catch((e) => {
      alert("error");
    });

    if (response.ok) {
      let data = await response.json();
      deleteCookie("updPass");
      alert(data.message);
    } else {
      alert("error");
    }
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

  if (!forgotCookie) {
    return (
      <Redirect
        to={{
          pathname: "/forgot-password",
        }}
      />
    );
  }

  return (
    <FormWrap>
      <h3 className={`text text_type_main-medium`}>Восстановление пароля</h3>
      <div className={`mt-6`}>
        <Input
          type={"password"}
          placeholder={"Введите новый пароль"}
          onChange={onChangePassword}
          value={password}
          name={"password"}
        />
      </div>
      <div className={`mt-6`}>
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={onChangeToken}
          value={token}
          name={"token"}
        />
      </div>
      <div className={`mt-6`}>
        <Button
          type="primary"
          size="medium"
          onClick={() => {
            postResetPass(password, token);
          }}
        >
          Сохранить
        </Button>
      </div>
      <p className={`text text_type_main-default text_color_inactive mt-20`}>
        Вспомнили пароль?{" "}
        <NavLink to="/login" className={`hrefBlue`}>
          Войти
        </NavLink>
      </p>
    </FormWrap>
  );
}
