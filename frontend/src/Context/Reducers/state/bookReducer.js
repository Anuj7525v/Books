export default function bookReducer(state, action) {
    switch (action.type) {
        case 'SET_BOOKS':
            return action.payload;
      //  case "SET_SELECTED_BOOK":
      //      return action.payload;
        default:
            return state;
    }
}