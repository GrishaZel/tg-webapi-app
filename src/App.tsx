import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import OrdersPage from "./pages/OrdersPage";
import UserInfoPage from "./pages/UserInfoPage";

const App = () => {
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
