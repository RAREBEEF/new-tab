import classNames from "classnames";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBookmark } from "../redux/reducers/modules/userSetting";
import { bookmarksProps, userSettingType } from "../types";
import styles from "./Bookmarks.module.scss";
import Button from "./Button";

const Bookmarks: React.FC<bookmarksProps> = ({ setBookmarkModalActive }) => {
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: userSettingType) => state.bookmarks);

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
    <ul className={styles.container}>
      {/* <a className={classNames(styles["bookmark"])}></a> */}
      {bookmarks.map((bookmark: any, i) => {
        console.log(bookmark);
        return (
          <li key={bookmark.id} className={classNames(styles["bookmark"])}>
            <a href={bookmark.url}>
              <div className={styles.icon}>
                {bookmark.title[0].toUpperCase()}
              </div>
              <div className={styles.title}>{bookmark.title}</div>
            </a>
            <div className={styles.delete} id={bookmark.id}>
              <Button
                text="X"
                onClick={onDeleteClick}
                styleOption={{
                  margin: 0,
                  position: "absolute",
                  top: "-10px",
                  right: "-10px",
                }}
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
