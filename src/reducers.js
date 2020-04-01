import HomeReducers from "./view/home/_reducer";
import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const appReducer = persistCombineReducers(persistConfig, { HomeReducers });

export default appReducer;
