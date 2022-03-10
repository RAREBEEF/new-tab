import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserNameAction } from "../redux/reducers/modules/userSetting";
import { SettingNameProps, userSettingType } from "../types";
import Button from "./Button";
import styles from "./SettingName.module.scss";

const SettingName: React.FC<SettingNameProps> = ({ setPage }) => {
  const userSetting = useSelector((state: userSettingType) => state);
  const dispatch = useDispatch();

  // setState
  const setUserName = useCallback(
    (name) => {
      dispatch(setUserNameAction(name));
    },
    [dispatch]
  );

  const onChange = useCallback(
    (e) => {
      setUserName(e.target.value);
    },
    [setUserName]
  );

  const onNextClick = useCallback(
    (e) => {
      e.preventDefault();
      if (userSetting.name.length >= 2) {
        setPage(2);
      }
    },
    [userSetting, setPage]
  );

  return (
    <div className={styles.query}>
      <h2 className={styles["query__title"]}>사용하실 이름을 알려주세요.</h2>
      <form>
        <input
          className={styles["input--text"]}
          type="text"
          minLength={2}
          maxLength={12}
          placeholder="2 ~ 12 글자"
          value={userSetting.name}
          onChange={onChange}
        />
        <Button
          text="다음"
          onClick={onNextClick}
          styleOption={{
            cursor: userSetting.name.length >= 2 ? "pointer" : "default",
            backgroundColor: userSetting.name.length >= 2 ? userSetting.theme === "white" ? "black" : "white" : "#bebebe",
          }}
        />
      </form>
    </div>
  );
};

export default SettingName;
