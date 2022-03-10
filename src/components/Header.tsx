import { useSelector } from "react-redux";
import { userSettingType } from "../types";
import styles from "./Header.module.scss";

export default function Header() {
  const userName = useSelector((state: userSettingType) => state.name);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Good morning, {userName}</h1>
    </div>
  );
}
