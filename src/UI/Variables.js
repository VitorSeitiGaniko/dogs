import styled from "styled-components";

export const StyledTitle = styled.h1`
	font-size: 22px;
	text-transform: uppercase;
`;

export const StyledContainer = styled.div`
	max-width: 50rem;
	padding: 0 1rem;
	margin: 0 auto;
`;

export const StyledButton = styled.button`
	font-size: 1rem;
	font-family: var(--type-first);
	cursor: pointer;
	border: none;
	border-radius: 0.4rem;
	background: #fb1;
	color: #764701;
	min-width: 8rem;
	padding: 0.8rem 1.2rem;
	box-sizing: border-box;
	transition: 0.1s;

	&:hover {
		outline: none;
		box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
	}

	&:disabled {
		opacity: 0.5;
		cursor: wait;
	}
`;

export const StyledInput = styled.input`
	border: 1px solid #eee;
	display: block;
	width: 100%;
	font-size: 1rem;
	padding: 0.8rem;
	border-radius: 0.4rem;
	background: #eee;
	transition: 0.2s;

	&:hover {
		outline: none;
		border-color: #fb1;
		background: white;
		box-shadow: 0 0 0 3px #fea;
	}

	&:focus {
		outline: none;
		border-color: #fb1;
		background: white;
		box-shadow: 0 0 0 3px #fea;
	}
`;

export const StyledLabel = styled.label`
	display: block;
	font-size: 1rem;
	line-height: 1;
	padding-bottom: 0.5rem;
	margin-top: 1rem;
`;
