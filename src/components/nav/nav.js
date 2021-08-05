import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import navStyles from "./nav.module.css";

export default function AppHeader() {
  return (
    <nav className={`${navStyles.nav} pt-4 pb-4`}>
      <div className={navStyles.list}>
        <div className={navStyles.item1}>
          <NavLink to="/" className={`${navStyles.button} pr-5 pl-5`}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default pl-2">
              Конструктор
            </span>
          </NavLink>
          <NavLink to="/list" className={`${navStyles.button} ml-2 pr-5 pl-5`}>
            <ListIcon type="secondary" />
            <span className="text_type_main-default text_color_inactive pl-2">
              Лента заказов
            </span>
          </NavLink>
        </div>
        <div className={navStyles.item2}>
          <Logo />
        </div>
        <div className={navStyles.item3}>
          <NavLink to="/profile" className={`${navStyles.button} pr-5 pl-5`}>
            <ProfileIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive pl-2">
              Личный кабинет
            </span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
