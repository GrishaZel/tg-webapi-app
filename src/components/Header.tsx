import { Link } from "react-router-dom";

const nav = [
  {
    name: "Личный кабинет",
    path: "/",
  },
  {
    name: "Заказы",
    path: "/orders",
  },
];

const Header = () => {
  return (
    <div className="flex justify-around py-2 border-b-2 border-rose-600 mb-3">
      {nav.map((i) => {
        return <Link to={i.path}>{i.name}</Link>;
      })}
    </div>
  );
};

export default Header;