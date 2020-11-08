import {takeEvery, take, takeLatest, call, fork, put} from 'redux-saga/effects';
import {
  getContactSuccess,
  getContactFailed,
  addContactSuccess,
  addContactFailed,
  delContactSuccess,
  delContactFailed,
  updateContactSuccess,
  updateContactFailed,
} from '../actions/contactAction';
import {GET_CONTACT, ADD_CONTACT, DEL_CONTACT, UPDATE_CONTACT} from '../actions/types';
import {
  getContactApi,
  createContactApi,
  delContactApi,
  updateContactApi,
} from '../api/contactApi';

function* getContact() {
  try {
    const response = yield call(getContactApi);
    yield put(getContactSuccess(response.data.data));
  } catch (error) {
    yield put(getContactFailed(error));
    console.log('error_show', error);
  }
}

function* addContact(action) {
  try {
   yield call(createContactApi, action.payload);
   yield call(getContact());
  } catch (error) {
    console.log('error_add', error);
    yield put(addContactFailed(error));
  }
}

function* updateContact(action){
  try {
    const response = yield call(updateContactApi, action.payload);
  } catch (error) { 
    yield put(updateContactFailed(error.message))
    console.log('error_update', error);
  }
}

function* delContact(id) {
  try {
    yield call(delContactApi, id);
    yield put(delContactSuccess(id));
  } catch (error) {
    console.log('error_deleted', error);
    yield put(delContactFailed(error));
  }
}

function* watchGetContactRequest() {
  yield takeEvery(GET_CONTACT, getContact);
}

function* watchAddContactRequest() {
  yield takeLatest(ADD_CONTACT, addContact);
}

function* watchUpdateContactRequest(){
  yield takeLatest(UPDATE_CONTACT, updateContact)
}

function* watchDelContact() {
  while (true) {
    const action = yield take(DEL_CONTACT);
    yield call(delContact, action.payload);
  }
}

const contactSagas = [
  fork(watchGetContactRequest),
  fork(watchDelContact),
  fork(watchAddContactRequest),
  fork(watchUpdateContactRequest),
];

export default contactSagas;
