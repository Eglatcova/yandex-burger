import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import ProfileForm from "../components/profile-form/profile-form";
import styles from "./profile.module.css";

export function Profile() {
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
        <NavLink
          exact
          to="/profile/exit"
          className={`${styles.item} text text_type_main-medium`}
          activeClassName={styles.activeItem}
        >
          Выход
        </NavLink>
      </div>
      <div className={`${styles.content}`}>
        <Switch>
          <Route path="/profile" exact={true}>
            <ProfileForm />
          </Route>
          <Route path="/profile/orders" exact={true}>
            <div className="div">История заказов</div>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
