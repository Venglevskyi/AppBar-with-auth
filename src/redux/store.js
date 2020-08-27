import { createStore, combineReducers } from "redux";
import { posts, filter } from "./posts/postReducer";

const reducer = combineReducers({ posts, filter });

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
