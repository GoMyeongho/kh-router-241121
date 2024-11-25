import { useParams } from "react-router-dom";

const data = {
	frontend: {
		name: "렉사르",
		description: "리액트를 좋아하는 개발자"
	},
	backend: {
		name: "티란데",
		description: "스프링부트를 좋아하는 개발자"
	},
	dba: {
		name: "아서스",
		description: "DBA 를 꿈꾸는 개발자"
	},
};


const Profile = () => {
	const params = useParams();
	const profile = data[params.username];
	
	return (
		<>
			<h1>사용자 프로필</h1>
			{profile ? (
				<>
					<h1>{profile.name}</h1>
					<p>{profile.description}</p>
				</>
			) : (
				<p>존재하지 않는 프로필 입니다.</p>
			)}
		</>
	)
}
export default Profile;