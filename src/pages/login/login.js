import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useHistory, Redirect } from "react-router-dom";
import {
  EmailInput,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { postAuth } from "../../services/actions/user.js";
import { FormWrap } from "../../components/form-wrap/form-wrap";

export function LoginPage() {
  const history = useHistory();
  const prevPath = history.location.state?.from;

  const { auth } = useSelector((store) => ({
    auth: store.user.auth,
  }));

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = data;

  const onChangeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const onClickLogin = (e) => {
    dispatch(postAuth(email, password));
  };

  if (auth) {
    return <Redirect to={prevPath || "/"} />;
  }

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
