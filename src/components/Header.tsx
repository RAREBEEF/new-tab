import { useSelector } from "react-redux";
import { HeaderModalProps, userSettingType } from "../types";
import styles from "./Header.module.scss";

const Header: React.FC<HeaderModalProps> = ({ time }) => {
  const userName = useSelector((state: userSettingType) => state.name);
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Good{" "}
        {time >= 18 || (time >= 0 && time < 6)
          ? "evening"
          : time >= 6 && time < 12
          ? "morning"
          : "afternoon"}
        , {userName}
      </h1>
    </div>
  );
};

export default Header;
