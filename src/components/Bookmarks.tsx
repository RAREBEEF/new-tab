import classNames from "classnames";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookmark } from "../redux/reducers/modules/userSetting";
import { bookmarksProps, userSettingType } from "../types";
import styles from "./Bookmarks.module.scss";
import Button from "./Button";

const Bookmarks: React.FC<bookmarksProps> = ({
  setBookmarkModalActive,
  isBlur,
}) => {
  const dispatch = useDispatch();
  const userSetting = useSelector((state: userSettingType) => state);

  const onAddClick = useCallback(() => {
    setBookmarkModalActive(true);
  }, [setBookmarkModalActive]);

  const onDeleteClick = useCallback(
    (e) => {
      dispatch(deleteBookmark(parseFloat(e.target.parentNode.id)));
    },
    [dispatch]
  );

  return (
    <ul
      className={classNames(
        styles.container,
        styles[userSetting.theme],
        isBlur && styles.blur
      )}
    >
      {userSetting.bookmarks.map((bookmark: any, i) => {
        console.log(bookmark);
        return (
          <li key={bookmark.id} className={classNames(styles["bookmark"])}>
            <a href={bookmark.url} className={styles.anchor}>
              <div className={styles.icon}>
                {bookmark.title[0].toUpperCase()}
              </div>
              <div className={styles.title}>{bookmark.title}</div>
            </a>
            <div className={styles.delete} id={bookmark.id}>
              <Button
                text="X"
                onClick={onDeleteClick}
                classes={["Bookmarks__delete"]}
              />
            </div>
          </li>
        );
      })}
      <li
        className={classNames(styles["bookmark"], styles.add)}
        onClick={onAddClick}
      >
        <div className={styles.icon}>+</div>
        <div className={styles.title}>Add bookmark</div>
      </li>
    </ul>
  );
};

export default Bookmarks;
