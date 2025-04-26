import styled from "styled-components";

export const Container = styled.div`
	background-color: #242424;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	gap: 1.5rem;
`;

export const InputArea = styled.div`
	display: flex;
	gap: 0.5rem;
`;

export const Input = styled.input`
	padding: 0.5rem;
	border-radius: 0.375rem;
	background-color: #e1f4f3;
	border: none;
	outline: none;
`;

export const Button = styled.button`
	background-color: #047857; /* green-700 */
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 0.375rem;
	border: none;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		background-color: #065f46;
	}
`;

export const Card = styled.div`
	background-color: #e1f4f3;
	width: 300px;
	height: 450px;
	border-radius: 0.75rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	gap: 0.75rem;
`;

export const Avatar = styled.img`
	width: 6rem;
	height: 6rem;
	border-radius: 9999px;
	object-fit: cover;
`;

export const Name = styled.h1`
	color: black;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	width: 100%;
	text-align: center;
	padding: 0.5rem 0;
`;

export const Bio = styled.p`
	color: black;
	text-align: center;
	padding: 0 0.5rem;
`;

export const Repos = styled.h2`
	color: black;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	width: 100%;
	text-align: center;
	padding: 0.5rem 0;
`;

export const GithubLink = styled.a`
	background-color: #047857;
	color: white;
	padding: 0.25rem 1rem;
	border-radius: 0.375rem;
	margin-top: 0.5rem;
	font-size: 0.875rem;
	text-decoration: none;
	transition: 0.3s;

	&:hover {
		background-color: #065f46;
	}
`;
