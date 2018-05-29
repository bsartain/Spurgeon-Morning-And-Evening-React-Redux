import { FILTER_POSTS } from '../actions';

export default(state = {}, action) => {
    switch (action.type) {
        case 'GET_POSTS':
            return action.payload;
        case FILTER_POSTS:
            return action.payload
        default:
            return state
    }
}