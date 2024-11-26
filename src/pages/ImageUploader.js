import {useState} from "react";
import {storage} from "../api/Firebase";

const ImageUploader = () => {
	const [file, setFile] = useState(null); // 로컬 파일 경로
	const [url, setUrl] = useState(""); //업로드 후 파이어베이스 URL 경로
	
	// 업로드 할 피일 선택
	const handleFileInputChange = e => {
		setFile(e.target.files[0]);
	}
	
	// 업로드 버튼 클릭
	const handleUploadClick = () => {
		if(!file) alert("파일을 먼저 선택하세요")
		const storageRef = storage.ref();  // Firebase 의 스토리지 참고
		const fileRef = storageRef.child(file.name);
		fileRef.put(file)   // 파일 업로드
		.then(() => {
			console.log("파일 업로드 성공")
			return fileRef.getDownloadURL() // 업로드된 파일의 URL 을 가져옴
		})
		.then((downloadUrl) => {
			console.log("저장된 경로 : " + downloadUrl);
			setUrl(downloadUrl);  // 이미지 URL 상태 업데이트
		})
		.catch((error) => {
			console.log("업로드중 에러 발생" + error);
		})
	}
	
	
	
	return(
		<>
			<input type="file" onChange={handleFileInputChange} />
			<button onClick={handleUploadClick}>파일 업로드</button>
			{url && <img src={url} alt="파일 없음" style={{ height: "100%" }} />}
		</>
	)
}

export default ImageUploader;