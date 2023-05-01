import { useTelegram } from "../hooks/useTelegram";

const UserInfoPage = () => {
  const { tg, user, queryId } = useTelegram();

  return (
    <div className="App">
      Вы: {JSON.stringify(user) || ""}
      <br />
      Ваш queryId: {queryId || ""}
      <br />
      <br />
      <br />
      разберем TG: {JSON.stringify(tg)}
    </div>
  );
};

export default UserInfoPage;
