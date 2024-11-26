import {useContext} from "react";
import {UserContext} from "../context/UserStore";
import styled, {css} from "styled-components";
import {Link, useNavigate} from "react-router-dom";

const Container = styled.div`
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
		margin: 20px;
		background-color: red;
`

const Button = styled.button`
		margin: 10px;
		width: 300px;
		height: 70px;
		background-color: transparent;
		border: 2px solid white;
		color: white;
		font-size: 1.2em;
		cursor: pointer;
		border-radius: 6px;
		box-shadow: 1px 1px 5px #999;
		${props => props.color && css`
				background-color: ${props.color};
		`}
		&:active {
				transform: translateY(2px);
		}
`



const Setting = () => {
	const { setColor } = useContext(UserContext);
	
	const navigate = useNavigate();
	
	const colorChange = color => {
		setColor(color);
		navigate("/")
	};
	
	return (
		<Container>
			<Button color="orange" onClick={() => colorChange("orange")}>오렌지</Button>
			<Button color="green" onClick={() => colorChange("green")}>그린</Button>
			<Button color="lightgray" onClick={() => colorChange("lightgray")}>밝은회색</Button>
			<Link to="/">로그인으로 이동</Link>
		</Container>
	)
}

export default Setting;