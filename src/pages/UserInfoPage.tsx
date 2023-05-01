import { useTelegram } from "../hooks/useTelegram";

const UserInfoPage = () => {
  const { user, queryId } = useTelegram();

  return (
    <div className="App">
      Вы: {`${user.first_name} ${user.last_name}` || ""}
      <br />
      Ваш ID: {user.id} || ""
      <br />
      Ваш queryId: {queryId || ""}
    </div>
  );
};

export default UserInfoPage;
