import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import Home from "../pages/Home";
import InitialSetting from "../pages/InitialSetting";
import { useSelector } from "react-redux";
import { userSettingType } from "../types";

function App() {
  const userSetting = useSelector((state: userSettingType) => state);
  const [bg, setBg] = useState("");
  
  useEffect(() => {
    switch (userSetting.theme) {
      case "jawsbar":
        setBg("linear-gradient(25deg, #b7094c, #5c4d7d, #0091ad)");
        break;
      case "purple":
        setBg(
          "linear-gradient(25deg,#2d00f7,#8900f2,#bc00dd,#b100e8,#db00b6,#f20089)"
        );
        break;
      case "pastel":
        setBg(
          "linear-gradient(25deg,#ffadad,#ffd6a5,#fdffb6,#caffbf,#9bf6ff,#a0c4ff,#bdb2ff,#ffc6ff,#fffffc)"
        );
        break;
      case "black":
        setBg("linear-gradient(black, black)");
        break;
      case "white":
        setBg("linear-gradient(white, white)");
        break;
      default:
        break;
    }
  }, [userSetting.theme]);

  return (
    <div
      className={styles.App}
      style={{
        color:
          userSetting.theme === "white" || userSetting.theme === "pastel"
            ? "black"
            : "white",
        background: bg,
      }}
    >
      {userSetting.isSet ? <Home /> : <InitialSetting />}
    </div>
  );
}

export default App;

// TODO: 로컬 스토리지에서 유저 세팅 여부 확인
// 유저 세팅 없을 경우 => 최초 접속이므로 초기 세팅
// 유저 세팅 있을 경우 => 재접속이므로 세팅을 바탕으로 홈화면 렌더링
// FIXME: 유저 세팅 state redux로 옮기기
// 초기 세팅 말고 설정 페이지에서도 유저 세팅 수정하려면 전역 상태로 관리하는게 나을 듯
// 유저 세팅이 누락되었는지 확인 절차 필요
