import { Outlet } from 'react-router-dom';
import styled from "styled-components";

const Header = styled.header`
		background-color: lightgray;
		padding: 16px;
		font-size: 24px;
		height: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
`;

const Footer = styled.footer`
		background-color: royalblue;
		color: white;
		padding: 16px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 18px;
		height: 100px;
`

const Main = styled.main`
		height: calc(100vh - 200px);
`

const Layout = () => {
	return (
		<>
			<Header>
			여기는 헤더 영역 입니다.
			</Header>
			<Main>
				<Outlet/>
			</Main>
			<Footer>
			여기는 풋터 영역 입니다.
			</Footer>
		</>
	)
}
export default Layout;