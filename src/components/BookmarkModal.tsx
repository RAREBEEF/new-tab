import classNames from "classnames";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { addBookmark } from "../redux/reducers/modules/userSetting";
import { bookmarkModalProps } from "../types";
import styles from "./BookmarkModal.module.scss";
import Button from "./Button";

const BookmarkModal: React.FC<bookmarkModalProps> = ({
  setBookmarkModalActive,
}) => {
  const dispatch = useDispatch();
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
    <div className={styles.container}>
      <h2
        style={{
          background: "linear-gradient(25deg, #b7094c, #5c4d7d, #0091ad)",
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
