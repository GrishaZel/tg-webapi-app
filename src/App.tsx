import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { useTelegram } from "./hooks/useTelegram";
import OrdersPage from "./pages/OrdersPage";
import UserInfoPage from "./pages/UserInfoPage";
import QuizPage from "./pages/QuizPage";
import RafflePage from "./pages/RafflePages";

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
      <main className="pt-[50px]">
        <Routes>
          <Route index element={<UserInfoPage />} />
          <Route path={"orders"} element={<OrdersPage />} />
          <Route path={"quiz"} element={<QuizPage />} />
          <Route path={"raffle"} element={<RafflePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
