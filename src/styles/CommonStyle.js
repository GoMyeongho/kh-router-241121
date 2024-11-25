import styled from "styled-components";

// 색상 정의
const defaultBackgroundColor = "#f9aa06";
const defaultFontColor = "#fff";

export const Container = styled.div`
		display: flex;
		position: relative;
		flex-wrap: wrap;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		width: 500px;
		margin: auto;
		background-color: ${props => props.color || defaultBackgroundColor};
`

export const StyledInput = styled.input`
		margin: 20px 30px;
		width: 80%;
		height: auto;
		padding: 1em;
		border: 1px solid #999;
		border-radius: 18px;
		outline-style: none;
`

export const StyledButton = styled.button`
		font-weight: bold;
		font-size: 1.4em;
		width: 80%;
    padding: 0.5em;
    border: 1px solid #999;
    border-radius: 18px;
    outline-style: none;
`