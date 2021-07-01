import React, { useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import appStyles from "./app.module.css";

const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [state, setState] = React.useState({
    success: true,
    data: [],
  });

  useEffect(() => {
    const fetchProduct = () => {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((data) => {
          setState({ ...data });
        })
        .catch((e) => {
          setState({ success: false, data: [] });
        });
    };
    fetchProduct();
  }, []);

  return (
    <div className={appStyles.app}>
      {state.success ? (
        <>
          <AppHeader />
          <div className={appStyles.container}>
            <BurgerIngredients data={state.data} />
            <BurgerConstructor data={state.data} />
          </div>
        </>
      ) : (
        alert("Произошла ошибка. Перезагрузите страницу")
      )}
    </div>
  );
}

export default App;
