import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userSettingType } from "../types";
import Button from "./Button";
import styles from "./Search.module.scss";

export default function Search() {
  const [text, setText] = useState("");
  const [queryUrl, setQueryUrl] = useState("");
  const engine = useSelector((state: userSettingType) => state.engine);

  useEffect(() => {
    switch (engine) {
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
  }, [engine]);

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
    <div className={styles.container}>
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
            // marginTop: "auto",
            display: "inline",
            // position: "absolute",
            // right: "0",
            // top: "2px",
            color: "white",
            borderLeft: "1px solid white",
            borderRadius: "0 5px 5px 0",
            backgroundColor: "rgba(255, 255, 255, .3)",
            // width: "65px",
          }}
        />
      </form>
    </div>
  );
}
