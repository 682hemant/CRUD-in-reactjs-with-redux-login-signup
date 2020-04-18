import * as actionTypes from './actionTypes'

export const storeArticle=(value)=>{
    console.log(value)
    return{
        type:actionTypes.STORE_ARTICLE,
        title:value.articleData.title,
        area:value.articleData.area

    }
}

export const deleteArticle =(valueId)=>{
    return{
        type:actionTypes.REMOVE_ARTICLE,
         articleId:valueId

    }
}
export const showArea=(valueId)=>{
    return{
        type:actionTypes.SHOW_AREA,
        showAreaId:valueId
    }
}