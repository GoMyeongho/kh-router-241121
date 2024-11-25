import {useParams} from "react-router-dom";

const Article = () => {
	const {id} = useParams();
	return(
		<>
			<h2>게시글 {id} 입니다~~~</h2>
		</>
	)
}
export default Article;