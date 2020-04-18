import * as actionType from '../actions/actionTypes';
import { updateObject } from '../Utility'
// import { showArea } from '../actions';

const initialState = {
  articles: [],
  showArticle: {
    id: undefined,
    article: ''
  }
}
const storeArticle = (state, action) => {
  const newArticle = {
    id: Math.random(),
    title: action.title,
    area: action.area
  }
  return updateObject(state, { articles: state.articles.concat(newArticle) })
}


const StoreArticle = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_ARTICLE: return storeArticle(state, action)
    case actionType.REMOVE_ARTICLE: {
      const showArticle = state.showArticle.id === action.articleId 
        ? {
          id: undefined,
          article: ''
        }
        : state.showArticle
      return updateObject(state, {
        articles: state.articles.filter(article => article.id !== action.articleId),
        showArticle
      })
    }
    case actionType.SHOW_AREA:
      for (let article of state.articles) {
        if (action.showAreaId === article.id) {
          // console.log(article.id, action.showAreaId)
          return {
            ...state,
            showArticle: {
              id: article.id,
              article: article.area
            }
          }
        }
      }
      /* state.articles.map(article => {
        if (action.showAreaId === article.id) {
          return {
            ...state,
            showArticle: {
              id: article.id,
              article: article.area
            }
          }
        }
      }) */
      return state;
    default: return state;
  }

}
export default StoreArticle;
//   ...state,
//   articles: state.articles.filter(article => article.id !== action.articleId)
// }


// return {
//   ...state,
//   articles: state.articles.concat(newArticle)

// }