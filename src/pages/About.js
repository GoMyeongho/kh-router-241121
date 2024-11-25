import {Link, useLocation, useSearchParams} from "react-router-dom";

// 쿼리 스트링 : URL 의 뒷부분에 붙여서 전달하는 유동적인 데이터
// 주소?키=값&키=값...

const About = () => {
	const [searchParams, setSearchParams] = useSearchParams({mode: 1});
	// const location = useLocation();
	
	// 쿼리스트링에서 정보 가져오기
	const detail = searchParams.get("detail");
	const mode = searchParams.get("mode");
	
	// detail 값을 토글하는 함수
	const onToggleDetail = () => {
		setSearchParams({mode, detail: detail !== "true"})
	}
	
	// mode 값을 증가시키는 함수
	const onIncreaseMode = () => {
		const nextMode = mode === null ? 1 : parseInt(mode) + 1;
		setSearchParams({mode: nextMode, detail})
	}
	
	return (
		<>
			<h1>여기는 어바웃 페이지 입니다.</h1>
			<p>소개 페이지 입니다.</p>
			<Link to="/home">홈으로 이동</Link>
			{/*<p>쿼리 스트링 : {location.search}</p>*/}
			<p>detail : {detail}</p>
			<p>mode : {mode}</p>
			<button onClick={onToggleDetail}>토글</button>
			<button onClick={onIncreaseMode}>증가</button>
		</>
	)
}

export default About;