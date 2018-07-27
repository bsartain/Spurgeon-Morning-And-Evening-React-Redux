export default(state = {}, action) => {
    switch (action.type) {
        case 'GET_PSALMS':
            return action.payload
        default:
            return state
    }
}