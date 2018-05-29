import { SHOW_POST, ARCHIVE_POST, LOAD_POST } from '../actions';


export default(state = {}, action) => {
    switch (action.type) {
        case SHOW_POST:
            return action.payload;
        case ARCHIVE_POST:
            return action.payload;
        case LOAD_POST:
            return action.payload
        default:
            return state
    }
}