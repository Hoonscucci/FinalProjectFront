import React, { useState } from "react";
import "./Nav.css";
import { useCookies } from "react-cookie";
import { useUserStore } from "../stores";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isChampionDropdownOpen, setIsChampionDropdownOpen] = useState(false);
  const [cookies, setCookies, removeCookie] = useCookies();
  const {user, removeUser} = useUserStore();
  const navigate = useNavigate();


  const logOutHandler = (e) => {
    e.preventDefault();
    removeCookie('token');
    removeCookie('widgetOneTrue');
    removeCookie('widgetTwoTrue');
    removeUser();
    navigate(`/`);
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsChampionDropdownOpen(false); // 챔피언 티어 드롭다운을 닫습니다.
  };

  const toggleChampionDropdown = () => {
    setIsChampionDropdownOpen(!isChampionDropdownOpen);
    setIsDropdownOpen(false); // 다른 드롭다운을 닫습니다.
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsChampionDropdownOpen(false);
  };

  return (
    <div className="App">
      <nav className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link" href="/">
            15GG
          </a>
        </li>
        <li
          className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}
          onMouseEnter={toggleDropdown}
          onMouseLeave={closeDropdowns}
        >
          <a className="nav-link dropdown-toggle" href="/Classic_An" role="button">
            챔피언 분석
          </a>
          <ul
            className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}
            aria-labelledby="navbarDropdown"
            style={{ backgroundColor: "#380101", color: "white" }}
          >
            <li>
              <a className="dropdown-item" href="/Classic_An">
                협곡 분석
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Aram_An">
                칼바람 분석
              </a>
            </li>
          </ul>
        </li>
        <li
          className={`nav-item dropdown ${
            isChampionDropdownOpen ? "show" : ""
          }`}
          onMouseEnter={toggleChampionDropdown}
          onMouseLeave={closeDropdowns}
        >
          <a
            className="nav-link dropdown-toggle"
            href="/Classic_Ti"
            role="button"
          >
            챔피언 티어
          </a>
          <ul
            className={`dropdown-menu ${isChampionDropdownOpen ? "show" : ""}`}
            aria-labelledby="navbarDropdown"
            style={{ backgroundColor: "#380101", color: "white" }}
          >
            <li>
              <a className="dropdown-item" href="/Classic_Ti">
                협곡 티어
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/Aram_Ti">
                칼바람 티어
              </a>
            </li>
          </ul>
        </li>

          {cookies.token ?(<li className="nav-item">
            <button className="nav-link" onClick={(e)=> logOutHandler(e)}>
              로그아웃
            </button>
          </li>):(<li className="nav-item">
            <a className="nav-link" href="/login">
              로그인
            </a>
          </li>)}

      </nav>
    </div>
  );
};

export default Nav;
