import React from "react";
import Classic_An from "./Classic_An";
import Classic_Ti from './Classic_Ti';
import "./Home.css"
import { useCookies } from "react-cookie";
import Aram_An from "./Aram_An";
import Aram_Ti from "./Aram_Ti";


const Home = () => {
  const [cookies, setCookies] = useCookies();
  const widgetOneComponentName = cookies.widgetOneTrue;
  const widgetTwoComponentName = cookies.widgetTwoTrue;

  const componentMap = {
    classic_An: <Classic_An />,
    classic_Ti: <Classic_Ti />,
    aram_An: <Aram_An />,
    aram_Ti: <Aram_Ti />,
  };

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
            <div className="widgetOne">
               {widgetOneComponent && widgetOneComponent}
            </div>
          <div className="widgetTwo">
            {widgetTwoComponent && widgetTwoComponent}
          </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
