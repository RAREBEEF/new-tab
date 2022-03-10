import classNames from "classnames";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark } from "../redux/reducers/modules/userSetting";
import { bookmarkModalProps, userSettingType } from "../types";
import styles from "./BookmarkModal.module.scss";
import Button from "./Button";

const BookmarkModal: React.FC<bookmarkModalProps> = ({
  setBookmarkModalActive,
}) => {
  const dispatch = useDispatch();
  const userSetting = useSelector((state: userSettingType) => state);
  const [bookmark, setBookmark] = useState({ title: "", url: "" });

  const onTitleChange = useCallback(
    (e) => {
      setBookmark({ ...bookmark, title: e.target.value });
    },
    [bookmark]
  );

  const onUrlChange = useCallback(
    (e) => {
      setBookmark({ ...bookmark, url: e.target.value });
    },
    [bookmark]
  );

  const onSubmitClick = useCallback(
    (e) => {
      console.log(bookmark);
      e.preventDefault();
      dispatch(addBookmark(bookmark));
      setBookmarkModalActive(false);
    },
    [setBookmarkModalActive, bookmark, dispatch]
  );

  const onCancelClick = useCallback(
    (e) => {
      e.preventDefault();
      setBookmarkModalActive(false);
    },
    [setBookmarkModalActive]
  );

  return (
    <div
      className={classNames(
        styles.container,
        (userSetting.theme === "white" || userSetting.theme === "pastel") &&
          styles.white
      )}
    >
      <h2
        style={{
          background:
            userSetting.theme === "white"
              ? "white"
              : userSetting.theme === "jawsbar"
              ? "linear-gradient(25deg, #b7094c, #5c4d7d, #0091ad)"
              : userSetting.theme === "purple"
              ? "linear-gradient(25deg,#2d00f7,#8900f2,#bc00dd,#b100e8,#db00b6,#f20089)"
              : userSetting.theme === "pastel"
              ? "linear-gradient(25deg,#ffadad,#ffd6a5,#fdffb6,#caffbf,#9bf6ff,#a0c4ff,#bdb2ff,#ffc6ff,#fffffc)"
              : "black",
        }}
      >
        Add bookmark
      </h2>
      <form>
        <input
          className={classNames(
            styles["input--text"],
            styles["bookmark-title"]
          )}
          type="text"
          placeholder="Site name"
          value={bookmark.title}
          onChange={onTitleChange}
          maxLength={10}
        />
        <input
          className={classNames(styles["input--text"], styles["bookmark-url"])}
          type="text"
          placeholder="URL"
          value={bookmark.url}
          onChange={onUrlChange}
        />
        <Button
          onClick={onSubmitClick}
          text="Submit"
          styleOption={{
            margin: "15px 15px 15px auto",
            // border: "1px solid black",
            display: "inline",
          }}
        />
        <Button
          onClick={onCancelClick}
          text="Cancel"
          styleOption={{
            margin: "auto",
            // border: "1px solid black",
            display: "inline",
          }}
        />
      </form>
    </div>
  );
};

export default BookmarkModal;
