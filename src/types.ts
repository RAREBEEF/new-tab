export interface setUserNameActionType {
  type: string;
  name: string;
}
export interface setSerachEngineActionType {
  type: string;
  engine: string;
}

export interface setThemeActionType {
  type: string;
  theme: string;
}

export interface setIsSetActionType {
  type: string;
  isSet: boolean;
}

export interface userSettingType {
  name: string;
  engine: string;
  theme: string;
  isSet: boolean;
}

export interface ButtonProps {
  text: string;
  onClick: (e: any) => void;
  styleOption?: object;
}

// Prop type
export interface SettingNameProps {
  setPage: Function;
}
export interface SettingEngineProps {
  setPage: Function;
}

export interface SettingThemeProps {
  setPage: Function;
}
