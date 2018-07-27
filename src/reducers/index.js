import { combineReducers } from 'redux';
import GetPosts from './reducer_get_posts';
import ShowPost from './reducer_show_post';
import GetPsalms from './reducer_get_psalms';
import GetProverbs from './reducer_get_proverbs';
import GetEcclesiastes from './reducer_get_ecclesiastes'

const rootReducer = combineReducers({
  posts: GetPosts,
  single: ShowPost,
  psalms: GetPsalms,
  proverbs: GetProverbs,
  ecclesiastes: GetEcclesiastes
});

export default rootReducer;