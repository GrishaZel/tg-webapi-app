import { useEffect, useState } from "react";

const QuizPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (window as any).Tally?.loadEmbeds?.();
  }, []);

  const iframeSrc = "https://tally.so/r/mBKELe";

  return (
    <main>
      {isLoading ? (
        <div style={{ display: "flex", flex: 1 }}>
          <h2>Загрузка...</h2>
        </div>
      ) : null}
      <iframe
        title="quiz"
        className="tally-iframe"
        data-tally-src={iframeSrc}
        width="100%"
        height="100%"
        onLoad={() => setIsLoading(false)}
      ></iframe>
    </main>
  );
};

export default QuizPage;
