import React, { useState } from "react";
import Classic_An from "./anal/Classic";
import Classic_Ti from './tier/Classic';
import "./Home.css"
// import { useCookies } from "universal-cookie";
import Aram_An from "./anal/Aram";
import Aram_Ti from "./tier/Aram";
import WidgetOneButton from "./widget/One";
import WidgetTwoButton from "./widget/Two";


const Home = () => {
  // const [cookies, setCookies] = useCookies();
  const widgetOneComponentName = sessionStorage.getItem("widgetOneTrue");
  const widgetTwoComponentName = sessionStorage.getItem("widgetTwoTrue");
  const token = sessionStorage.getItem("token")

  const componentMap = {
    Classic_An: <Classic_An />,
    Classic_Ti: <Classic_Ti />,
    Aram_An: <Aram_An />,
    Aram_Ti: <Aram_Ti />,
  };

  const widgetNameMap = {
    Classic_An: "협곡 분석",
    Classic_Ti: "협곡 티어",
    Aram_An: "칼바람 분석",
    Aram_Ti: "칼바람 티어",
  }

  const widgetOneComponent = componentMap[widgetOneComponentName]
  const widgetTwoComponent = componentMap[widgetTwoComponentName]


  return (
    <div className="container">
      <div className="image-container">
        <img
          src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blte18c746f460ab0f7/647fd84007768f6edc948595/TFT_SET923_COMMS_GameplayOverview_ArticleBanner_1920x1080_v001_ALyu.jpg"
          alt=""
        />
     
          <div className="widget-container">
            { widgetOneComponent ? 
            (<div className="widgetOne">
              <WidgetOneButton/>
              {widgetOneComponent}
            </div>) 

            : (token ? 
            (<div className="widgetNotLogin1">
              눌러주세요
            <WidgetOneButton/>
            </div>)
            :(<div className="widgetNotLogin1">
              로그인시 이용 가능한 페이지입니다.
              </div>))}
            

            {widgetTwoComponent ? 
            (<div className="widgetTwo">
              <WidgetTwoButton/>
              {widgetTwoComponent }
            </div>) 
            : (token ? 
            (<div className="widgetNotLogin2">
              눌러주세요
              <WidgetTwoButton/>
              </div>)
              :(<div className="widgetNotLogin2">
                로그인시 이용 가능한 페이지입니다.
                </div>))}
          
          </div>
        </div>
      </div>
  );
};

export default Home;
