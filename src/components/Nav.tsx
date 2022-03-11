import classNames from "classnames";
import { useCallback, useState } from "react";
import { SettingModalProps } from "../types";
import styles from "./Nav.module.scss";
import SettingModal from "./SettingModal";

const Nav: React.FC<SettingModalProps> = ({
  setSettingModalActive,
  settingModalActive,
}) => {
  const onSettingClick = useCallback(() => {
    setSettingModalActive(!settingModalActive);
  }, [settingModalActive, setSettingModalActive]);

  return (
    <div className={styles.container}>
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
