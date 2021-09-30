const notificationReducer = (state = { message: '' }, action) => {
  switch(action.type) {
    case 'CREATE_NOTIFICATION':
      return state = action.data

    case 'RESET':
      return state = action.data

    default:
      return state
  }
}

export const notificate = (message, time) => {
  return async dispatch => {
    dispatch({
      type: 'CREATE_NOTIFICATION',
      data: {
        message
      }
    })
    setTimeout(() => {
      dispatch({
        type: 'RESET',
        data: {
          message: ''
        }
      })
    }, time)
  }
}

export default notificationReducer