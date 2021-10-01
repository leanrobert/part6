let timer

const notificationReducer = (state = { message: '' }, action) => {
  switch(action.type) {
    case 'CREATE_NOTIFICATION':
      clearTimeout(timer)
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
    timer = setTimeout(() => {
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