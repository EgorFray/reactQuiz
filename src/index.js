import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { QuizProvider } from "./components/context/QuizContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<QuizProvider>
			<App />
		</QuizProvider>
	</React.StrictMode>
);
