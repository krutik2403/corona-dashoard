import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import appReducer from "./reducers";

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(appReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
