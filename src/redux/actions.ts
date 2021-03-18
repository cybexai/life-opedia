import * as constants from './constants';

export function signin(user: any) {
    return {
        type: constants.SIGNIN,
        user
    };
}

export function getArticles() {
    return {
        type: constants.GET_ARTICLES,
    };
}

export function setArticle(articles: any) {
    return {
        type: constants.SET_ARTICLES,
        articles
    };
}

export function saveArticle(article: any, history: any) {
    return {
        type: constants.SAVE_ARTICLE,
        article, history
    };
}

export function updateArticle(article: any, history: any) {
    return {
        type: constants.UPDATE_ARTICLE,
        article, history
    };
}

export function deleteArticle(articleId: string) {
    return {
        type: constants.DELETE_ARTICLE,
        articleId
    };
}

export function getCategories() {
    return {
        type: constants.GET_CATEGORIES,
    };
}

export function setCategorie(categories: any) {
    return {
        type: constants.SET_CATEGORIES,
        categories
    };
}