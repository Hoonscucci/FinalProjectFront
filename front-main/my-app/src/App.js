import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searchbar from "./pages/Searchbar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Nav from "./pages/Nav";
import Search from "./pages/Search";
import Classic_Ti from "./pages/Classic_Ti";
import Aram_Ti from "./pages/Aram_Ti";
import Classic_An from "./pages/Classic_An";
import Aram_An from "./pages/Aram_An";
import Classic_An_Search from "./pages/Classic_An_Serach";
import Aram_An_Search from "./pages/Aram_An_Search";


const App = () => {
  return (
    <div>
      {/* 상단 네비게이션바 불러오기 */}
      <Nav /> 
      {/* 검색기 불러오기 */}
      <Searchbar />
      {/* 경로 설정 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Classic_Ti" element={<Classic_Ti />} />
        <Route path="/Aram_Ti" element={<Aram_Ti />} />
        <Route path="/Aram_An" element={<Aram_An />} />
        <Route path="/Classic_An" element={<Classic_An />} />
        <Route path="/Classic_An_Search" element={<Classic_An_Search />} />
        <Route path="/Aram_An_Search" element={<Aram_An_Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      
    </div>
  );
};

export default App;
