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

export function userRegistration(user_info) {
  return (dispatch) => {
    let users = JSON.parse(localStorage.getItem("users"));
    users = users && users.length ? users : [];
    users.push({email: user_info.email, password: user_info.password})
    localStorage.setItem('users', JSON.stringify(users));
    dispatch({
      type: USER_REGISTRATION, user_info
    })
    dispatch({
      type: USER_LOGIN, user_info
    })
  }
}