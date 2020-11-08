import {
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILED,
  DEL_CONTACT,
  DEL_CONTACT_SUCCESS,
  DEL_CONTACT_FAILED,
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILED,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILED,
} from './types';

export const getContact = (payload) => ({
  type: GET_CONTACT,
  payload,
});

export const getContactSuccess = (payload) => ({
  type: GET_CONTACT_SUCCESS,
  payload,
});

export const getContactFailed = (payload) => ({
  type: GET_CONTACT_FAILED,
  payload,
});

export const addContact = (payload) => ({
  type: ADD_CONTACT,
  payload,
});

export const addContactSuccess = (payload) => ({
  type: ADD_CONTACT_SUCCESS,
  payload,
});

export const addContactFailed = (payload) => ({
  type: ADD_CONTACT_FAILED,
  payload,
});

export const setContact = (payload) => ({
  type: SET_CONTACT,
  payload
})

export const clearContact = () => ({
  type: CLEAR_CONTACT,
})

export const updateContact = (payload) => ({
  type: UPDATE_CONTACT,
  payload
})

export const updateContactSuccess = (payload) => ({
  type: UPDATE_CONTACT_SUCCESS,
  payload,
})

export const updateContactFailed = (payload) => ({
  type: UPDATE_CONTACT_FAILED,
  payload,
})

export const delContact = (payload) => ({
  type: DEL_CONTACT,
  payload,
});

export const delContactSuccess = (payload) => ({
  type: DEL_CONTACT_SUCCESS,
  payload
});

export const delContactFailed = (payload) => ({
  type: DEL_CONTACT_FAILED,
  payload
})
