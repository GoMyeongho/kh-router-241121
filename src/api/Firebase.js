import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
	apiKey: "AIzaSyDYuT9tAXDE2bbeIHYxWAJRPyeZePSpYSA",
	authDomain: "kh-test-d210e.firebaseapp.com",
	projectId: "kh-test-d210e",
	storageBucket: "kh-test-d210e.firebasestorage.app",
	messagingSenderId: "468658226121",
	appId: "1:468658226121:web:4fe4e16642f9458aeede18"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();