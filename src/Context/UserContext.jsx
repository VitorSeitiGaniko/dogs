import React from "react";
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE } from "../api";
import { useNavigate } from "react-router-dom";
//Para criar um contexto exporte todas as "funções"
//Utilize o Provider passando dentro da tag os values e englobando o children

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
	const [data, setData] = React.useState(null);
	const [isLogged, seIsLogged] = React.useState(false);
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const navigate = useNavigate();

	const userLogout = React.useCallback(
		async function userLogout(token) {
			setData(null);
			setError(null);
			setLoading(false);
			seIsLogged(false);
			localStorage.removeItem("TOKEN");
			navigate("/login");
		},
		[navigate]
	);

	async function getUser(token) {
		const { url, options } = GET_USER(token);
		const response = await fetch(url, options);
		const responseBody = await response.json();

		setData(responseBody);
		seIsLogged(true);
	}

	async function userLogin(username, password) {
		try {
			setError(null);
			setLoading(true);
			//O TOKEN_POST vai pegar os valores do body e já vai preencher nos options
			const { url, options } = TOKEN_POST({ username, password });

			//Aqui quando é feito o fetch, os valores de cima já estão nos options
			const response = await fetch(url, options);
			console.log("response  --> ", response);

			if (!response.ok) throw new Error(`Error: ${response.statusText}`);
			const { token, message } = await response.json();
			console.log(message);

			localStorage.setItem("TOKEN", token);
			await getUser(token);
			navigate("/conta");
		} catch (err) {
			setError(err.message);
			seIsLogged(false);
		} finally {
			setLoading(false);
		}
	}

	React.useEffect(() => {
		async function autoLogin() {
			const token = localStorage.getItem("TOKEN");
			if (token) {
				try {
					setError(null);
					setLoading(true);
					const { url, options } = TOKEN_VALIDATE(token);
					const response = await fetch(url, options);
					console.log(response);

					if (!response.ok) throw new Error("Token inválido");
					await getUser(token);
				} catch (err) {
					userLogout();
				} finally {
					setLoading(false);
				}
			} else {
				seIsLogged(false);
			}
		}
		autoLogin();
	}, [userLogout]);

	return (
		<UserContext.Provider
			value={{
				getUser,
				userLogin,
				data,
				userLogout,
				isLogged,
				loading,
				error,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
