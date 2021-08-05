import React, { useState } from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

export default function ProfileForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeName = (e) => {
    setData({ ...data, name: e.target.value });
  };

  const onChangeEmail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const onChangePassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const { email, password, name } = data;
  return (
    <div className={`ml-15`}>
      <div>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={onChangeName}
          value={name}
          name={"name"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`mt-6`}>
        <Input
          type={"email"}
          placeholder={"Логин"}
          onChange={onChangeEmail}
          value={email}
          name={"email"}
          icon={"EditIcon"}
        />
      </div>
      <div className={`mt-6`}>
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={onChangePassword}
          value={password}
          name={"password"}
          icon={"EditIcon"}
        />
      </div>
    </div>
  );
}
