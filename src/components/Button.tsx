import { useSelector } from "react-redux";
import { ButtonProps, userSettingType } from "../types";
import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({ text, onClick, styleOption }) => {
  const theme = useSelector((state: userSettingType) => state.theme);
  return (
    <button
      className={styles.btn}
      onClick={onClick}
      style={{
        backgroundColor: theme === "white" ? "black" : "white",
        color: theme === "white" ? "white" : "black",
        ...styleOption,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
