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
        setBg("black");
        break;
      case "white":
        setBg("whitesmoke");
        break;
      default:
        break;
    }
  }, [userSetting.theme]);

  useEffect(() => {
    localStorage.setItem("userSetting", JSON.stringify({ ...userSetting }));
  }, [userSetting]);

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


// FIXME: 
// 시계 폰트 고정폭으로 변경
// 전체적인 테마 다듬기
// 테마 색상 더 쉽게 변경할 수 있는 방법 생각해보기
// 설정창 구현하기
// 검은테마 북마크 호버 추가
// 모달 투명도 없애기 고려