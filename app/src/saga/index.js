import { put, takeEvery} from 'redux-saga/effects';
import {changeState} from "../actions/Index";

export function* waitButtonChangesState() {
    yield takeEvery('BUTTON_CLICKED', notifyServer);
}

export function* notifyServer() {
    yield put(changeState());
}

export default function* rootSaga() {
    yield waitButtonChangesState();
}
