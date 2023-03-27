import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Api from "./api/Api";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./Context/UserContext";
import User from "./Components/User/User";
import ProtectRouter from "./Helper/ProtectRouter";

function App() {
	return (
		<div>
			<BrowserRouter>
				<UserStorage>
					<Header />

					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="about" element={<About />}></Route>
						<Route path="login/*" element={<Login />}></Route>
						<Route
							path="conta/*"
							element={
								<ProtectRouter>
									<User />
								</ProtectRouter>
							}
						></Route>
					</Routes>

					<Footer />
				</UserStorage>
			</BrowserRouter>
		</div>
	);
}

export default App;
