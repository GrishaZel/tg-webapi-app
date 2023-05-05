import {useState} from "react";

const QuizPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className="App">
            {isLoading ? (
                <div style={{ display: "flex", flex: 1}}>
                    <h2>Загрузка...</h2>
                </div>
            ) : null}
            <iframe
                title="quiz"
                className="tally-iframe"
                data-tally-src="https://tally.so/r/nWJOMN?transparentBackground=1"
                width="100%"
                height="100%"
                onLoad={() => setIsLoading(false)}
            >
            </iframe>
        </div>
    );
};

export default QuizPage;
