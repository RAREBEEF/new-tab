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

export interface addBookmarkActionType {
  type: string;
  title: string;
  url: string;
  id: number;
}

export interface deleteBookmarkActionType {
  type: string;
  id: number;
}

export interface userSettingType {
  name: string;
  engine: string;
  theme: string;
  bookmarks: Array<Object>;
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

export interface bookmarksProps {
  setBookmarkModalActive: Function;
}

export interface bookmarkModalProps {
  setBookmarkModalActive: Function;
}
