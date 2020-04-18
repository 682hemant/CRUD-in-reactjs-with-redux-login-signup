import * as actionType from '../../redux/actions/actionTypes'

const initialState = {
  users: [
    {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    {
      firstName: 'demo',
      lastName: 'demo',
      email: 'demo@gmail.com',
      password: 'demo',
    }

  ],
  isLogged: false
}

const signUpReducer = (state = initialState, action) => {

  switch (action.type) {
    case actionType.SIGNUP:
      return {
        users: [
          ...state.users,
          action.payload
        ],
      }
    case actionType.LOGIN:
      for (let user of state.users) {
        if (user.email === action.payload.email && user.password === action.payload.password) {
          return {
            ...state,
            isLogged: true
          }
        }
      }
    default: return state
  }
    return state;

}
export default signUpReducer;

