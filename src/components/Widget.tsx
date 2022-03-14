import classNames from "classnames";
import { WidgetProps } from "../types";
import Bookmarks from "./Bookmarks";
import Header from "./Header";
import Search from "./Search";
import styles from "./Widget.module.scss";

const Widget: React.FC<WidgetProps> = ({ isBlur, setBookmarkModalActive }) => {
  return (
    <div className={classNames(styles.container, isBlur && styles.blur)}>
      <Header />
      <Search />
      <Bookmarks setBookmarkModalActive={setBookmarkModalActive} />
    </div>
  );
};

export default Widget;
