import { useTelegram } from "../hooks/useTelegram";

const UserInfoPage = () => {
  const { user, queryId } = useTelegram();

  return (
    <div className="App">
      Вы: {JSON.stringify(user) || ""}
      <br />
      Ваш queryId: {queryId || ""}
    </div>
  );
};

export default UserInfoPage;
