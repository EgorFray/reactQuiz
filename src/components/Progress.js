import { useQuiz } from "./context/QuizContext";

function Progress() {
	const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
	return (
		<header className="progress">
			<progress max={numQuestions} value={index + Number(answer !== null)} />
			<p>
				Question <strong>{index + 1}</strong> / <strong>{numQuestions}</strong>
			</p>

			<p>
				Points <strong>{points}</strong> / <strong>{maxPossiblePoints}</strong>
			</p>
		</header>
	);
}

export default Progress;
