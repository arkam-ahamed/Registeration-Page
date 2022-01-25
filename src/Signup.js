import React, { useState } from "react";
import "./App.css";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

import { Link } from "react-router-dom";

function Signup() {
	const [username, setUserName] = useState("");

	function registerUser(e) {
		e.preventDefault();
		//this function is not working
		console.log("username: " + username);
	}
	return (
		<div className="main signupPage ">
			<div className="sub-main signup">
				<form onSubmit={registerUser}>
					<div>
						<h1>Sign Up Page</h1>
						<FaUserAlt style={{ fontSize: "50px", paddingBottom: "10px" }} />
					</div>
					<div className="mainInput">
						<div>
							<FaUserTie className="inputDiv" />
							<input type="text" placeholder="Full name" className="name" />
						</div>
						<div>
							<FaUserTie className="inputDiv" />
							<input
								type="text"
								placeholder="user name"
								className="name"
								value={username}
								onChange={(e) => setUserName(e.target.value)}
							/>
						</div>
						<div>
							<FaEnvelope className="inputDiv" />
							<input type="text" placeholder="Email" className="name" />
						</div>
						<div className="signup-password">
							<FaLock className="inputDiv" style={{ color: "black" }} />

							<input type="password" placeholder="password" className="name" />
						</div>
						<div className="confirm-password" style={{ paddingBottom: "15px" }}>
							<FaLock className="inputDiv" />

							<input
								type="password"
								placeholder="confirm password"
								className="name"
							/>
						</div>
					</div>
					<div className="login-button">
						<input type="submit" value="Sign up" className="button" />
						<p className="link">
							Already have an account? <Link to="/">Log in</Link>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Signup;
