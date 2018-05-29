import { combineReducers } from 'redux';
import GetPosts from './reducer_get_posts';
import ShowPost from './reducer_show_post'

const rootReducer = combineReducers({
  posts: GetPosts,
  single: ShowPost
});

export default rootReducer;