
import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import signUpReducer from '../reducers/signupReducer'
 import StoreArticle from '../reducers/StoreArticle'
 import logger from 'redux-logger';

 const composeEnhancers  = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
      sgn:signUpReducer,
      str:StoreArticle
});

const store = createStore(rootReducer,composeEnhancers(applyMiddleware(logger)));
export default store;
