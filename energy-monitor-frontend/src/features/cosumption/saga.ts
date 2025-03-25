import { put, takeLatest, delay, call } from "redux-saga/effects";
import { fetchConsumptionSuccess, fetchConsumptionFailure } from "./slice";
import { ConsumptionAction } from "./enum";
import { fetchConsumptionData } from "./generator";
import { ConsumptionData } from "./types";

function* fetchConsumptionSaga() {
  try {
    const data: ConsumptionData = yield call(fetchConsumptionData);
    yield put(fetchConsumptionSuccess(data));
  } catch (error) {
    yield put(fetchConsumptionFailure("Hiba történt az adatok lekérésekor."));
  }
}

export function* consumptionSaga() {
  yield takeLatest(ConsumptionAction.FETCH_CONSUMPTION_REQUEST, fetchConsumptionSaga);
}