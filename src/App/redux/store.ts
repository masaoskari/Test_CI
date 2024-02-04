import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import appConfigReducer from "../../appConfig/redux/appConfigSlice";
import partEditorReducer from "../../PartEditor/redux/partEditorSlice";

const rootReducer = combineReducers({
  appConfig: appConfigReducer,
  partEditor: partEditorReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
