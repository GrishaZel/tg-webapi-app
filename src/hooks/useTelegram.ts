const tg = window?.Telegram?.WebApp;

export function useTelegram() {
  return {
    tg,
    user: tg ? tg.initDataUnsafe?.user : "",
    queryId: tg ? tg.initDataUnsafe?.query_id : "",
  };
}
