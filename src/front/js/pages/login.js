import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
	const { store, actions } = useContext(Context);
	// 1. create two useStates, one for email the other for password 
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// 3. create a function call handleClick that will include the fetch with options that includes the email and password in the body to be sent to the server as a post
	 const handleClick = async () => {
		const response = await fetch('https://opulent-invention-69vvw5q75rq524p4q-3001.app.github.dev/',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email, 
				password: password
			}),
		});
		const data = await response.json();
		console.log(data);
	 }

	// 2. make the <input> controlled inputs 
	// also, make the button execute the handleClick function 
	return (
		<div className="text-center mt-5">
			<h1>Login</h1>
			<div>
				<input 
					type="text" 
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div>
			<input 
				type="password" 
				placeholder="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)} 
			/>
			</div>
			<div>
				<button onClick={handleClick}>Login</button>
			</div>
			
		</div>
	);
};
