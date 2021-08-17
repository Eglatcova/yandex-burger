import React from "react";
import { useDispatch } from "react-redux";
import { Switch, NavLink, useHistory } from "react-router-dom";

import { postLogout } from "../sevices/actions/user";

import { getCookie } from "../utils/getCookie";

import ProfileForm from "../components/profile-form/profile-form";
import { ProtectedRoute } from "../components/protected-route/protected-route";
import styles from "./profile.module.css";

export function Profile() {
  const history = useHistory();

  const dispatch = useDispatch();

  const onClockLogout = () => {
    dispatch(postLogout(getCookie("token"))).then(() => {
      history.replace({ pathname: "/login" });
    });
  };

  return (
    <div className={`${styles.wrap}`}>
      <div className={`${styles.nav}`}>
        <NavLink
          exact
          to="/profile"
          className={`${styles.item} text text_type_main-medium`}
          activeClassName={styles.activeItem}
        >
          Профиль
        </NavLink>
        <NavLink
          exact
          to="/profile/orders"
          className={`${styles.item} text text_type_main-medium`}
          activeClassName={styles.activeItem}
        >
          История заказов
        </NavLink>
        <li
          className={`${styles.item} text text_type_main-medium`}
          onClick={onClockLogout}
        >
          Выход
        </li>
      </div>
      <div className={`${styles.content}`}>
        <Switch>
          <ProtectedRoute path="/profile" exact={true}>
            <ProfileForm />
          </ProtectedRoute>
          <ProtectedRoute path="/profile/orders" exact={true}>
            <div className="div">История заказов</div>
          </ProtectedRoute>
        </Switch>
      </div>
    </div>
  );
}
