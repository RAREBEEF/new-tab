import classNames from "classnames";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { SettingModalProps, userSettingType } from "../types";
import styles from "./Nav.module.scss";
import SettingModal from "./SettingModal";

const Nav: React.FC<SettingModalProps> = ({
  setSettingModalActive,
  settingModalActive,
}) => {
  const userSetting = useSelector((state: userSettingType) => state);

  const onSettingClick = useCallback(() => {
    setSettingModalActive(!settingModalActive);
  }, [settingModalActive, setSettingModalActive]);

  return (
    <div className={classNames(styles.container, styles[userSetting.theme])}>
      <ul>
        <li
          onClick={onSettingClick}
          className={classNames(
            styles.item,
            settingModalActive && styles.active
          )}
        >
          Setting
        </li>
      </ul>
      {settingModalActive && (
        <SettingModal
          settingModalActive={settingModalActive}
          setSettingModalActive={setSettingModalActive}
        />
      )}
    </div>
  );
};

export default Nav;
