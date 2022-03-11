import { useSelector } from "react-redux";
import { ButtonProps, userSettingType } from "../types";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  styleOption,
  classes,
}) => {
  const theme = useSelector((state: userSettingType) => state.theme);
  return (
    <button
      className={classNames(
        styles.btn,
        styles[theme],
        classes?.map((item: any) => styles[item])
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
