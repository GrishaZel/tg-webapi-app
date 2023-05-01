import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useTelegram } from "./hooks/useTelegram";
import OrdersPage from "./pages/OrdersPage";
import UserInfoPage from "./pages/UserInfoPage";

const App = () => {
  const { tg } = useTelegram();

  useEffect(() => {
    if (tg) {
      tg.ready();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<UserInfoPage />} />
        <Route path={"orders"} element={<OrdersPage />} />
      </Routes>
    </div>
  );
};

export default App;
