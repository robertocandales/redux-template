import { ADD_USER } from '../types';

const initialState = {
  users: [],
};
export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [...state.users, [action.payload]] };

    default:
      return state;
  }
}
