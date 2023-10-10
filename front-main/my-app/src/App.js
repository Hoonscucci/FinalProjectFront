import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searchbar from "./pages/search/Searchbar";
import Aram_Ti from "./pages/tier/Aram";
import Classic_Ti from "./pages/tier/Classic";
import Login from "./pages/login/Login";
import SignUp from "./pages/login/SignUp";
import Nav from "./pages/Nav";
import Search from "./pages/search/Search";
import Aram_An from "./pages/anal/Aram";
import Aram_Search from "./pages/anal/Aram_Search";
import Classic_An from "./pages/anal/Classic";
import Classic_Search from "./pages/anal/Classic_Search";
// import AnalSearch from "./pages/anal/AnalSearch";
import TestTest from "./pages/TestTest";

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
        <Route path="/tier/Classic" element={<Classic_Ti />} />
        <Route path="/tier/Aram" element={<Aram_Ti />} />
        <Route path="/anal/Classic" element={<Classic_An />} />
        <Route path="/anal/Aram" element={<Aram_An />} />
        {/* <Route path="/anal/analsearch" element={<AnalSearch />} /> */}
        <Route path="/anal/Aram_Search" element={<Aram_Search />} />
        <Route path="/anal/Classic_Search" element={<Classic_Search />} />
        <Route path="/login/login" element={<Login />} />
        <Route path="/login/signup" element={<SignUp />} />
        <Route path="/search/search" element={<Search />} />

        <Route path="/testtest" element={<TestTest />} />
      </Routes>
    </div>
  );
};

export default App;
