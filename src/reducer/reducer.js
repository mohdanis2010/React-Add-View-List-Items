const initialState = {
    lists: []
  };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
    case "ADD_TODO":
      return {

        lists: [
              ...state.lists,
            {
                name: action.payload.name,
                status: action.payload.status,
                id: state.lists.length
              }
          ]
        
      }
      case "GET_LIST":
      return {
        lists:[
            ...state.lists
        ]
      }
        default: { return state }
    }
}
  