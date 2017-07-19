export const USER_REGISTRATION = 'USER_REGISTRATION';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export function userLogin(user_info) {
  return (dispatch) => {
    dispatch({
      type: USER_LOGIN, user_info
    })
  }
}

export function userLogout() {
  return (dispatch) => {
    dispatch({
      type: USER_LOGOUT
    })
  }
}