import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSettingType } from "../types";
import Button from "./Button";
import styles from "./Search.module.scss";

export default function Search() {
  const [text, setText] = useState("");
  const [queryUrl, setQueryUrl] = useState("");
  const userSetting = useSelector((state: userSettingType) => state);

  useEffect(() => {
    switch (userSetting.engine) {
      case "google":
        setQueryUrl("https://www.google.com/search?q=");
        break;
      case "naver":
        setQueryUrl("https://search.naver.com/search.naver?query=");
        break;
      case "daum":
        setQueryUrl("https://search.daum.net/search?q=");
        break;
      default:
        break;
    }
  }, [userSetting.engine]);

  const onChange = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      window.location.href = queryUrl + text;
    },
    [queryUrl, text]
  );

  return (
    <div
      className={classNames(
        styles.container,
        (userSetting.theme === "white" || userSetting.theme === "pastel") &&
          styles.white,
        userSetting.theme === "black" && styles.black
      )}
    >
      <form>
        <input
          type="text"
          className={styles["input--text"]}
          value={text}
          onChange={onChange}
        />
        <Button
          text="Search"
          onClick={onClick}
          styleOption={{
            display: "inline",
            color:
              userSetting.theme === "white" || userSetting.theme === "pastel"
                ? "black"
                : userSetting.theme === "black"
                ? "black"
                : "white",
            borderLeft:
              userSetting.theme === "white" || userSetting.theme === "pastel"
                ? "1px solid black"
                : userSetting.theme === "black"
                ? "1px solid black"
                : "1px solid white",
            borderRadius: "0 5px 5px 0",
            backgroundColor:
              userSetting.theme === "white" || userSetting.theme === "pastel"
                ? "rgba(0, 0, 0, .3)"
                : userSetting.theme === "black"
                ? "rgba(255, 255, 255, 0.8)"
                : "rgba(255, 255, 255, .3)",
            height: "35px",
          }}
        />
      </form>
    </div>
  );
}
