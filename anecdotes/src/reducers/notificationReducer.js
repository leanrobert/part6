const notificationReducer = (state = { message: '' }, action) => {
  switch(action.type) {
    case 'NOTIFY':
      return [...state, action.data]

    default:
      return state
  }
}

export const notify = () => {
  return {
    type: 'NOTIFY',
    data: { 
      message: 'Notificated!'
    }
  }
}

export default notificationReducer