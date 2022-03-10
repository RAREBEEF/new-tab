import { useState } from "react";
import styles from "./InitialSetting.module.scss";
import SettingName from "../components/SettingName";
import SettingEngine from "../components/SettingEngine";
import SettingTheme from "../components/SettingTheme";

const InitialSetting = () => {
  // 초기 설정 페이지
  const [page, setPage] = useState(1);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        사용자 설정 <span className={styles["page-count"]}>({page} / 3)</span>
      </h1>
      {page === 1 && <SettingName setPage={setPage} />}
      {page === 2 && <SettingEngine setPage={setPage} />}
      {page === 3 && <SettingTheme setPage={setPage} />}
    </div>
  );
};

export default InitialSetting;
