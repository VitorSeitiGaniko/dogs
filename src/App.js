import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Api from "./api/Api";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />

				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="about" element={<About />}></Route>
					<Route path="login" element={<Login />}></Route>
				</Routes>

				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
