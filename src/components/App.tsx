import React, { useEffect } from "react";
import styles from "./App.module.scss";
import Home from "../pages/Home";
import InitialSetting from "../pages/InitialSetting";
import { useSelector } from "react-redux";
import { userSettingType } from "../types";
import classNames from "classnames";

function App() {
  const userSetting = useSelector((state: userSettingType) => state);

  useEffect(() => {
    localStorage.setItem("userSetting", JSON.stringify({ ...userSetting }));
  }, [userSetting]);

  return (
    <div className={classNames(styles.App, styles[userSetting.theme])}>
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
