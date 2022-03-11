import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SearchProps, userSettingType } from "../types";
import Button from "./Button";
import styles from "./Search.module.scss";

const Search: React.FC<SearchProps> = ({ isBlur }) => {
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
        styles[userSetting.theme],
        isBlur && styles.blur
      )}
    >
      <form>
        <input
          type="text"
          className={styles["input--text"]}
          value={text}
          onChange={onChange}
        />
        <Button text="Search" onClick={onClick} classes={["Search"]} />
      </form>
    </div>
  );
};

export default Search;
