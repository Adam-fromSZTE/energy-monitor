import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
//import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {}, // Ide kerülnek majd a reducert tartalmazó slice-ok
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

//sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;