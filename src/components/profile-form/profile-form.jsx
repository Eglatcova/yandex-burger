import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { patchUserData } from "../../sevices/actions/user";

import style from "./profile-form.module.css";

export default function ProfileForm() {
  const { auth, name, email, accessToken } = useSelector((store) => ({
    auth: store.user.auth,
    name: store.user.name,
    email: store.user.email,
    accessToken: store.user.accessToken,
  }));

  const dispatch = useDispatch();

  const [data, setData] = useState({
    newName: "",
    newEmail: "",
    newPassword: "",
  });

  useEffect(() => {
    auth && setData({ newName: name, newEmail: email, newPassword: "" });
  }, [auth, name, email]);

  const onChangeName = (e) => {
    setData({ ...data, newName: e.target.value });
  };

  const onChangeEmail = (e) => {
    setData({ ...data, newEmail: e.target.value });
  };

  const onChangePassword = (e) => {
    setData({ ...data, newPassword: e.target.value });
  };

  const onClickSave = (accessToken, name, email) => {
    dispatch(patchUserData(accessToken, name, email));
  };

  const onClickCancel = () => {
    setData({ ...data, newName: name, newEmail: email });
  };

  const { newName, newEmail, newPassword } = data;

  return (
    <div className={`ml-15`}>
      <div>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
          value={newName}
          name={"name"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`mt-6`}>
        <Input
          type={"email"}
          placeholder={"Логин"}
          onChange={onChangeEmail}
          value={newEmail}
          name={"email"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`mt-6`}>
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={onChangePassword}
          value={newPassword}
          name={"password"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`${style.btnWrap} mt-6`}>
        <Button
          type="primary"
          size="medium"
          onClick={() => {
            onClickSave(accessToken, newName, newEmail);
          }}
        >
          Сохранить
        </Button>
        <div className={`ml-6`}>
          <Button type="primary" size="medium" onClick={onClickCancel}>
            Отмена
          </Button>
        </div>
      </div>
    </div>
  );
}
