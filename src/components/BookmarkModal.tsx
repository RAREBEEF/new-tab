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
  const [bookmark, setBookmark] = useState({ title: "", url: "https://" });

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
      e.preventDefault();
      if (bookmark.title.length >= 1 && bookmark.url.length >= 1) {
        dispatch(addBookmark(bookmark));
        setBookmarkModalActive(false);
      }
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
    <div className={classNames(styles.container, styles[userSetting.theme])}>
      <form className={styles.content}>
        <h2>Add bookmark</h2>
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
          minLength={1}
        />
        <input
          className={classNames(styles["input--text"], styles["bookmark-url"])}
          type="text"
          placeholder="URL"
          value={bookmark.url}
          onChange={onUrlChange}
          minLength={1}
        />
        <Button
          onClick={onSubmitClick}
          text="Submit"
          classes={["BookmarkModal__submit"]}
        />
        <Button
          onClick={onCancelClick}
          text="Cancel"
          classes={["BookmarkModal__cancel"]}
        />
      </form>
    </div>
  );
};

export default BookmarkModal;
