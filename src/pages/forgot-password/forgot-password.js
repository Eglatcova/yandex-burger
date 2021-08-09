import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { setCookie } from "../../utils/setCookie";
import { FormWrap } from "../../components/form-wrap/form-wrap";

export function ForgotPassword() {
  const { auth } = useSelector((store) => ({
    auth: store.user.auth,
  }));

  const [email, setEmail] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  //запрос к апи, получение кода для создания нового пароля
  const postCodeForPass = (currEmail) => {
    fetch("https://norma.nomoreparties.space/api/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: currEmail,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setCookie("updPass", "Токен для восстановления пароля отправлен", {
            path: "/",
          });
          return res.json();
        } else {
          alert("error");
        }
      })
      .then((data) => {
        alert("Код отправлен на почту");
      })
      .catch((e) => {
        alert("error");
      });
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
      <h3 className={`text text_type_main-medium`}>Восстановление пароля</h3>
      <div className={`mt-6`}>
        <Input
          type={"email"}
          placeholder={"Укажите e-mail"}
          onChange={onChangeEmail}
          value={email}
          name={"email"}
        />
      </div>
      <div className={`mt-6`}>
        <Button
          type="primary"
          size="medium"
          onClick={() => {
            postCodeForPass(email);
          }}
        >
          Восстановить
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
