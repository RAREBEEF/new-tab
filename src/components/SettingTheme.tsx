import styles from "./SettingTheme.module.scss";
import classNames from "classnames";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { SettingThemeProps, userSettingType } from "../types";
import { useCallback } from "react";
import {
  setIsSetAction,
  setThemeAction,
} from "../redux/reducers/modules/userSetting";

const SettingTheme: React.FC<SettingThemeProps> = ({ setPage }) => {
  const userSetting = useSelector((state: userSettingType) => state);
  const dispatch = useDispatch();

  const onThemeClick = useCallback(
    (e) => {
      dispatch(setThemeAction(e.target.id));
    },
    [dispatch]
  );

  const setIsSet = useCallback(
    (isSet) => {
      dispatch(setIsSetAction(isSet));
    },
    [dispatch]
  );

  const onPrevClick = useCallback(
    (e) => {
      e.preventDefault();
      setPage(2);
    },
    [setPage]
  );

  const onSubmitClick = useCallback(
    (e) => {
      e.preventDefault();
      setIsSet(true);
    },
    [setIsSet]
  );

  return (
    <div className={classNames(styles.query)}>
      <h2 className={styles["query__title"]}>사용하실 테마를 골라주세요.</h2>
      <div className={styles["query__content"]}>
        <div className={styles["theme-wrapper"]}>
          <div
            id="jawsbar"
            onClick={onThemeClick}
            className={classNames(
              styles.theme,
              styles["theme--jawsbar"],
              userSetting.theme === "jawsbar" && styles.selected
            )}
          ></div>
          <div
            id="purple"
            onClick={onThemeClick}
            className={classNames(
              styles.theme,
              styles["theme--purple"],
              userSetting.theme === "purple" && styles.selected
            )}
          ></div>
          <div
            id="pastel"
            onClick={onThemeClick}
            className={classNames(
              styles.theme,
              styles["theme--pastel"],
              userSetting.theme === "pastel" && styles.selected
            )}
          ></div>
          <div
            id="black"
            onClick={onThemeClick}
            className={classNames(
              styles.theme,
              styles["theme--black"],
              userSetting.theme === "black" && styles.selected
            )}
          ></div>
          <div
            id="white"
            onClick={onThemeClick}
            className={classNames(
              styles.theme,
              styles["theme--white"],
              userSetting.theme === "white" && styles.selected
            )}
          ></div>
        </div>
        <Button
          text="이전"
          onClick={onPrevClick}
          classes={["InitialSetting-all-pages__prev"]}
        />
        <Button
          text="완료"
          onClick={onSubmitClick}
          classes={["InitialSetting-all-pages__next", "active"]}
        />
      </div>
    </div>
  );
};

export default SettingTheme;
