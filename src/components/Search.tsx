import { useCallback, useState } from "react";
// import Button from "./Button";
import styles from "./Search.module.scss";

export default function Search() {
  const [text, setText] = useState("");

  const setCookie = useCallback(
    (name: string, text: string, exp: number): void => {
      const date = new Date();
      date.setTime(new Date().getTime() + exp * 24 * 60 * 60 * 1000);
      document.cookie =
        name + "=" + text + ";expires=" + date.toUTCString() + ";path=/;Secure";
    },
    []
  );

  const getCookie = useCallback((text) => {
    const value = document.cookie.match("(^|;) ?" + text + "=([^;]*)(;|$)");
    return value ? value[2] : null;
  }, []);

  const onChange = useCallback(
    (e) => {
      setText(e.target.value);
      setCookie("keyword", e.target.value, 1);
    },
    [setCookie]
  );

  // const onClick = useCallback(
  //   (e) => {
  //     setCookie("keyword", text, 1);
  //   },
  //   [text, setCookie]
  // );

  return (
    <div className={styles.container}>
      <div>
        <input
          type="text"
          className={styles["input--text"]}
          value={text}
          onChange={onChange}
        />
        {/* <Button
          text="Search"
          onClick={onClick}
          styleOption={{
            marginTop: "auto",
            display: "inline",
            position: "absolute",
            right: "0",
            borderLeft: "1px solid black",
            borderRadius: "0 5px 5px 0",
            width: "65px",
          }}
        /> */}
        <a href={`https://www.google.com/search?q=${getCookie("keyword")}`}>
          Search
        </a>
      </div>
    </div>
  );
}
