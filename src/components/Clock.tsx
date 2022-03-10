import { ClockModalProps } from "../types";
import styles from "./Clock.module.scss";

const Clock: React.FC<ClockModalProps> = ({ time }) => {
  const day: any = time[6];

  return (
    <div className={styles.container}>
      <div className={styles.date}>
        {time[3]} / {time[4]} / {time[5]} /{" "}
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][day]}
      </div>
      <div className={styles.time}>
        {time[0]} : {time[1]} : {time[2]}
      </div>
    </div>
  );
};

export default Clock;
