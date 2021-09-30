const filterReducer = (state = '', action) => {
    switch(action.type) {
      case 'SET_FILTER':
          return state = action.data
  
      default:
        return state
    }
  }
  
  export const filterNotes = (value) => {
      return {
          type: 'SET_FILTER',
          data: value
      }
  }
  
  export default filterReducer