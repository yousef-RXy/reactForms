import { useState } from "react";

import Input from "./Input.jsx";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation.js";
import useInput from "../hooks/useInput.jsx";

export default function Login() {
	const {
		value: emailValue,
		handleInputChange: handleEmailChange,
		handleInputBlur: handleEmailBlur,
		hasError: emailIsInvalid,
	} = useInput("", (val) => isEmail(val) && isNotEmpty(val));

	const {
		value: passwordValue,
		handleInputChange: handlepasswordChange,
		handleInputBlur: handlepasswordBlur,
		hasError: passwordIsInvalid,
	} = useInput("", (val) => hasMinLength(val, 6));

	function handleSubmit(event) {
		event.preventDefault();
		if (passwordIsInvalid || emailIsInvalid) {
			return;
		}
		console.log({ email: emailValue, password: passwordValue });
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Login</h2>

			<div className="control-row">
				<Input
					label="Email"
					id="email"
					type="email"
					name="email"
					onChange={handleEmailChange}
					onBlur={handleEmailBlur}
					value={emailValue}
					error={emailIsInvalid && "Please enter a valid email!"}
				/>

				<Input
					label="Password"
					id="password"
					type="password"
					name="password"
					onChange={handlepasswordChange}
					onBlur={handlepasswordBlur}
					value={passwordValue}
					error={passwordIsInvalid && "Please enter a valid password!"}
				/>
			</div>

			<p className="form-actions">
				<button className="button button-flat">Reset</button>
				<button className="button">Login</button>
			</p>
		</form>
	);
}
