import React from "react";
import "./App.css";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Route, Routes, Link } from "react-router-dom";
import Signup from "./Signup";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

const Login = () => (
	<div className="main">
		<div className="sub-main">
			<div>
				<h1>Login Page</h1>
				<FaUserAlt style={{ fontSize: "50px", paddingBottom: "10px" }} />
			</div>
			<div>
				<FaEnvelope className="inputDiv" />
				<input type="text" placeholder="user name" className="name" />
			</div>
			<div className="second-input">
				<FaLock className="inputDiv" style={{ color: "black" }} />

				<input type="password" placeholder="password" className="name" />
			</div>
			<div className="login-button">
				<button>Login</button>
				<p className="link">
					Don't have an account? <Link to="/signup">Sign Up Here</Link>
				</p>
			</div>
		</div>
	</div>
);

export default App;
