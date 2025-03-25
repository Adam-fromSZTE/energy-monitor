import { call } from 'redux-saga/effects';
import { consumptionSaga } from '../features/consumption/saga';

export default function* rootSaga() {
	yield call(consumptionSaga);
}
