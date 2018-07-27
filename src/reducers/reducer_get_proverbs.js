export default(state = {}, action) => {
    switch (action.type) {
        case 'GET_PROVERBS':
            return action.payload
        default:
            return state
    }
}