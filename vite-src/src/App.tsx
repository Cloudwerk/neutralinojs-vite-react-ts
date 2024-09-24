import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import neuLogo from "/neutralino.png";
import "./App.css";

import { filesystem } from "@neutralinojs/lib";

function App() {
	const [count, setCount] = useState(0);

	// Log current directory or error after component is mounted
	useEffect(() => {
		filesystem
			.readDirectory("./")
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://neutralino.js.org/" target="_blank">
					<img src={neuLogo} className="logo" alt="Neutralino logo" />
				</a>
			</div>
			<h1>Vite + React + Neutralino</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
