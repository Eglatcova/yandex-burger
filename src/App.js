import React, { useEffect } from "react";
import "./App.css";
import AppHeader from "./components/app-header/app-header";
import BurgerConstructor from "./components/burger-constructor/burger-constructor";
import BurgerIngredients from "./components/burger-ingredients/burger-ingredients";

const url = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [state, setState] = React.useState({
    success: true,
    data: [],
  });

  useEffect(() => {
    const fetchProduct = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setState({ ...data }))
        .catch((e) => {
          setState({ success: false, data: [] });
        });
    };
    fetchProduct();
  }, []);

  return (
    <div className="App">
      {state.success ? (
        <>
          <AppHeader />
          <div className="container">
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
