import { USER_REGISTRATION, USER_LOGIN, USER_LOGOUT, USER_LOGIN_ERROR } from '../actions/userActions';

const initialState = {
  email: 'Аноним',
  auth: false
}



export default function user(state = initialState, action) {
  switch (action.type) {
    case USER_REGISTRATION:
      return Object.assign({}, state);
    case USER_LOGIN:
      return { ...state, email: action.user_info.email,  auth: true};
    case USER_LOGOUT:
      return { ...state, email: '', auth: false };
    default:
      return state;
  }
}