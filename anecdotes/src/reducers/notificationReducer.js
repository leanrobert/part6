const notificationReducer = (state = { message: '' }, action) => {
  switch(action.type) {
    case 'CREATE_NOTIFICATION':
      return state = action.data
    
    case 'VOTE_NOTIFICATION':
      return state = action.data

    case 'RESET':
      return state = action.data

    default:
      return state
  }
}

export const createdNotification = (content) => {
  return {
    type: 'CREATE_NOTIFICATION',
    data: {
      message: `${content} created`
    }
  }
}

export const votedNotification = (content) => {
  return {
    type: 'VOTE_NOTIFICATION',
    data: { 
      message: `${content} voted`
    }
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET',
    data: {
      message: ''
    }
  }
}

export default notificationReducer