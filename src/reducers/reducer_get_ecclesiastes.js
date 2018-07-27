export default(state = {}, action) => {
    switch (action.type) {
        case 'GET_ECCLESIASTES':
            return action.payload
        default:
            return state
    }
}