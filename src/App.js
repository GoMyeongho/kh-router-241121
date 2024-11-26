import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Login from "./pages/Login";
import Layout from "./styles/Layout";
import GlobalStyle from "./styles/GlobalStyle";
import UserStore from "./context/UserStore";
import Setting from "./pages/Setting";
import ImageUploader from "./pages/ImageUploader";
import MaterialEx from "./pages/MaterialEx";

function App() {
  return (
    <>
      <GlobalStyle />
      <UserStore>
        <Router>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route element={<Layout/>}>
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/profile/:username" element={<Profile/>} />
              <Route path="/articles" element={<Articles/>} />
              <Route path="/article/:id" element={<Article/>} />
              <Route path="/setting" element={<Setting/>} />
              <Route path="/imageuploader" element={<ImageUploader/>} />
              <Route path="/material" element={<MaterialEx/>} />
            </Route>
          </Routes>
        </Router>
      </UserStore>
    </>
    
  );
}

export default App;
