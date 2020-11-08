import {
  GET_CONTACT,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAILED,
  ADD_CONTACT,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILED,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_FAILED,
  DEL_CONTACT,
  DEL_CONTACT_SUCCESS,
  DEL_CONTACT_FAILED,
} from '../actions/types';

const initialState = {
  contacts: [],
  loading: false,
  error: null,
  current: null,
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };
    case GET_CONTACT_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_CONTACT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_CONTACT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CONTACT:
      return {
        ...state,
        current: null,
      }
    case UPDATE_CONTACT:
      return {
        ...state,
        loading: true,
      }
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case UPDATE_CONTACT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case DEL_CONTACT:
      return {
        ...state,
        loading: true,
      };
    case DEL_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload,
        ),
        loading: false,
      };
    case DEL_CONTACT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
