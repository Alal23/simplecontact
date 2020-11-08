import contactSagas from './contactSagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga(){
  yield all([
    ...contactSagas
  ]);
}