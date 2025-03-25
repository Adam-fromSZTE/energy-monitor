import { all } from "redux-saga/effects";
import { consumptionSaga } from "../features/cosumption/saga";

export default function* rootSaga() {
  yield all([consumptionSaga()]);
}