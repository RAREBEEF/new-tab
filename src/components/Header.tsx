import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { HeaderModalProps, userSettingType } from "../types";
import styles from "./Header.module.scss";

const Header: React.FC<HeaderModalProps> = () => {
  const userName = useSelector((state: userSettingType) => state.name);
  const [time, setTime] = useState(["00", "00", "00", 2022, "00", "00", ""]);
  const day: any = time[6];

  useEffect(() => {
    const timeUpdate = setInterval(() => {
      const date = new Date();
      setTime([
        date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(),
        date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes(),
        date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds(),
        date.getFullYear(),
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1,
        date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(),
        date.getDay(),
      ]);
    }, 1000);

    return () => {
      clearInterval(timeUpdate);
    };
  }, []);
  return (
    <div className={classNames(styles.container)}>
      <h1 className={styles.header}>
        Good{" "}
        {time[0] >= 17 && time[0] < 21
          ? "evening"
          : time[0] >= 21 || time[0] < 5
          ? "night"
          : time[0] >= 5 && time[0] < 11
          ? "morning"
          : "afternoon"}
        , {userName}
      </h1>
      <div className={styles.clock}>
        <div className={styles.date}>
          {time[3]}/{time[4]}/{time[5]}{" "}
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][day]}
        </div>
        <div className={styles.time}>
          {time[0]}:{time[1]}:{time[2]}
        </div>
      </div>
    </div>
  );
};

export default Header;
