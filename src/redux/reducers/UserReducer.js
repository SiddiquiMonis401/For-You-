import { ActionTypes } from '../actions';

export const UserReducer = (state = [{ id:1, name: "monis", email: "monisms15@gmail.com",  clothType:'Sherwani', contactNumber: "03112016704"}], action) => {
  const { ADD_USER,DELETE_USER,UPDATE_USER } = ActionTypes;
  switch (action.type) {
    case ADD_USER: {
      let id = state.length + 1
      const data = { id, ...action.payload }
      return [...state, data];
    }
    case DELETE_USER:
      return [...state.filter(items => items.id !== action.payload)]
    case UPDATE_USER:
      let updatedUserData = state.map((items, index) => {
        if (items.id === action.payload.id) {
          return { ...action.payload.data }
        }
        return items
      })
      return updatedUserData
    default:
      return [...state]
  }
}
