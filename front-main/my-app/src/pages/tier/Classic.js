
import React, { useState } from "react";
import "./style/Classic.css";
import "./style/Classic2.css";
import { ClassicTier } from "../../api";

const Classic = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState("");
  const [selectedRole, setSelectedRole] = useState(""); // 기본값은 "탑"으로 설정
  const [sortBy, setSortBy] = useState("win_rate"); // 초기 정렬 승률 높은순
  const [sortDirection, setSortDirection] = useState("descending");




  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const tierList = [
    "챌린저",
    "그랜드마스터",
    "마스터",
    "다이아",
    "에메랄드",
    "플레티넘",
    "골드",
    "실버",
    "브론즈",
    "아이언"
  ];

  const changeButtonText = (newText) => {
    setSelectedTier(newText);
    setIsDropdownOpen(false);
  };

  const handleRoleClick = async (role) => {
    setSelectedRole(role); // 클릭한 역할을 선택된 역할로 설정

    const tier = selectedTier;
    const team_position = role;

    const data = {
      tier,
      team_position
    };

    const TierData = await ClassicTier(data);
    console.log(TierData);
  
  };


  return (
      <div>
        <div className="css-123">협곡 티어 정보</div>
        <div>
        <div className="css-gtm9xc">
          <nav>
            <div className="css-g46fbk">
              <div>
                <div class="dropdown">
                  <button
                    class="btn custom-button dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={toggleDropdown}
                  >
                    {selectedTier}
                  </button>
                  <ul
                    class={`dropdown-menu text-center ${
                      isDropdownOpen ? "show dropdown-menu-up" : ""
                    }`}
                  >
                    {tierList.map((tier2) => (
                      <li key={tier2}>
                        <a
                          class="dropdown-item"
                          href="#"
                          onClick={() => changeButtonText(tier2)}
                        >
                          {tier2}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          </div>
          <div className="css-gtm9xc2">
            <nav class="nav-container">
              <button
                type="button"
                class={`nav-button ${selectedRole === "TOP" ? "active" : ""}`}
                onClick={() => handleRoleClick("TOP")}
              >
                TOP
              </button>
              {["JUNGLE", "MIDDLE", "BOTTOM", "UTILITY"].map((role) => (
                <button
                  key={role}
                  type="button"
                  class={`nav-button ${selectedRole === role ? "active" : ""}`}
                  onClick={() => handleRoleClick(role)}
                >
                  {role}
                </button>
              ))}
            </nav>
        </div>
        </div>
        <div>
          <div class="table-container1">
            <div class="table-header">챔피언</div>
            <div class="table-header">티어</div>
            <div class="table-header">승률</div>
            <div class="table-header">픽률</div>
            <div class="table-header">밴율</div>
            {[1, 2, 3, 4, 5].map((cell) => (
              <div key={cell} class="table-cell">
                {cell}
              </div>
            ))}
            
          </div>
        </div>
      </div>
    );
  };

  export default Classic;

