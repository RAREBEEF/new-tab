import {
  setIsSetActionType,
  setSerachEngineActionType,
  setThemeActionType,
  setUserNameActionType,
} from "../../../types";

export const SET_USER_NAME = "SET_USER_NAME";
export const SET_SEARCH_ENGINE = "SET_SEARCH_ENGINE";
export const SET_THEME = "SET_THEME";
export const SET_IS_SET = "IS_SET";

export function setUserNameAction(name: string): setUserNameActionType {
  return {
    type: SET_USER_NAME,
    name,
  };
}

export function setSerachEngineAction(
  engine: string
): setSerachEngineActionType {
  return {
    type: SET_SEARCH_ENGINE,
    engine,
  };
}

export function setThemeAction(theme: string): setThemeActionType {
  return {
    type: SET_THEME,
    theme,
  };
}

export function setIsSetAction(isSet: boolean): setIsSetActionType {
  return { type: SET_IS_SET, isSet };
}

// const initialState = {
//   name: "",
//   engine: "",
//   theme: "jawsbar",
//   isSet: false,
// };

const initialState = {
  name: "",
  engine: "",
  theme: "jawsbar",
  isSet: false,
  ...JSON.parse(localStorage.getItem("userSetting")!),
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_USER_NAME:
      return { ...state, name: action.name };
    case SET_SEARCH_ENGINE:
      return { ...state, engine: action.engine };
    case SET_THEME:
      return { ...state, theme: action.theme };
    case SET_IS_SET:
      return { ...state, isSet: action.isSet };
    default:
      return state;
  }
}
