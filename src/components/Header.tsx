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
  {
    name: "Голосования",
    path: "/quiz",
  },
];

const Header = () => {
  return (
    <div className="flex justify-around py-2 border-b-2  border-black mb-3 fixed w-full z-50">
      {nav.map((i) => {
        return (
          <Link to={i.path} key={i.path}>
            {i.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
