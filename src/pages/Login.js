import {Link, useNavigate } from "react-router-dom";
import {useState, useContext} from "react";
import {Container, StyledInput, StyledButton} from "../styles/CommonStyle";
import {UserContext} from "../context/UserStore";

const Login = () => {
	// 키보드 입력에 대한 상태 관리
	const [inputId, setInputId] = useState("");
	const [inputPw, setInputPw] = useState("");
	
	// 간단한 유효성 검사
	const [isId, setIsId] = useState(false);
	const [isPw, setIsPw] = useState(false);
	
	const navigate = useNavigate(); // 페이지 이동을 위한 객체 생성
	
	// useContext 훅으로 우리가 만든 UserContext 의 전역 상태 값에 접근
	const context = useContext(UserContext);
	const {setUserId, setPassword, color} = context;
	
	
	const onChangeId = e => {
		setInputId(e.target.value);
		e.target.value.length > 5 ? setIsId(true) : setIsId(false);
	}
	
	const onChangePw = e => {
		setInputPw(e.target.value);
		e.target.value.length > 5 ? setIsPw(true)  : setIsPw(false);
	}
	
	const onClickLogin = () => {
		// 원래는 axios 비동기 통신을 해야 함
		// 그리고 결과를 수신 후 결과값을 확인
		setUserId(inputId);
		setPassword(inputPw);
		if (inputId === "jks2024" && inputPw === "sphb8250") {
			navigate("/home");
		}
		else {
			alert("아이디 또는 패스워드가 틀립니다.");
		}
	}
	
	return (
		<Container color={color}>
			<StyledInput type="text" value={inputId} onChange={onChangeId} placeholder="아이디 입력"/>
			<br/>
			<StyledInput type="text" value={inputPw} onChange={onChangePw} placeholder="비밀번호 입력"/>
			<br/>
			{ (isId && isPw) ? <StyledButton onClick={onClickLogin} >로그인</StyledButton> :
				<StyledButton disabled onClick={onClickLogin} >로그인</StyledButton>}
			<Link to="/home">홈으로 이동</Link>
		</Container>
	)
}
export default Login