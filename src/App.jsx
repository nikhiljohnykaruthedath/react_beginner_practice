import "./App.css";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";

function App() {
	return (
		<>
			<div className="app">
				<Navigation />
				<Hero />
			</div>
		</>
	);
}

export default App;
