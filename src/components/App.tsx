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
