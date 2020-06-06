export const UserReducer = (state = [], action) => {
  switch (action.type) {
    case 'Add_User': {
      let id = state.length + 1;
      const data = { id, ...action.payload };
      return [...state, data];
    }
    case 'Del_User':
      return [...state.filter(items => items.id !== action.payload)]
    case 'Update_User':
      let updatedUserData = state.map((items, index) => {
        if (items.id === action.payload.id) {
          return { ...action.payload.data }
        }
        return items;
      })
      return updatedUserData;
    default:
      return [...state];
  }
}
