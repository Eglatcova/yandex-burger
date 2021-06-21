import React from "react";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import headerStyles from "./app-header.module.css";

export default class AppHeader extends React.Component {
  render() {
    return (
      <nav className={`${headerStyles.nav} pt-4 pb-4`}>
        <li className={headerStyles.list}>
          <ul className={headerStyles.item1}>
            <div className={`${headerStyles.button} pr-5 pl-5`}>
              <BurgerIcon type="primary" />
              <span className="text text_type_main-default pl-2">
                Конструктор
              </span>
            </div>
            <div className={`${headerStyles.button} ml-2 pr-5 pl-5`}>
              <ListIcon type="secondary" />
              <span className="text_type_main-default text_color_inactive pl-2">
                Лента заказов
              </span>
            </div>
          </ul>
          <ul className={headerStyles.item2}>
            <Logo />
          </ul>
          <ul className={headerStyles.item3}>
            <div href="/#" className={`${headerStyles.button} pr-5 pl-5`}>
              <ProfileIcon type="secondary" />
              <span className="text text_type_main-default text_color_inactive pl-2">
                Личный кабинет
              </span>
            </div>
          </ul>
        </li>
      </nav>
    );
  }
}
