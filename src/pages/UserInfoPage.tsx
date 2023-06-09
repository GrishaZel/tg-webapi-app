import { useTelegram } from "../hooks/useTelegram";

const UserInfoPage = () => {
  const { user } = useTelegram();

  return (
    <div className="App">
      Вы: {`${user?.first_name} ${user?.last_name}`}
      <br />
      Ваш размер экрана: {window && window?.innerWidth}
    </div>
  );
};

export default UserInfoPage;
