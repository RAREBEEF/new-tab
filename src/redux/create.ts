import { createStore } from "redux";
import userSetting from "./reducers/modules/userSetting";
const store = createStore(userSetting);

export default store;
