import { takeLatest } from 'redux-saga/effects';

import * as workers from './workers';
import { CONSTANTS } from '../redux';

export function* watchSignin() {
    yield takeLatest(CONSTANTS.SIGNIN, workers.signinWorker);
}

export function* watchGetArticle() {
    yield takeLatest(CONSTANTS.GET_ARTICLES, workers.getArticleWorker);
}

export function* watchSaveArticle() {
    yield takeLatest(CONSTANTS.SAVE_ARTICLE, workers.saveArticleWorker);
}

export function* watchUpdateArticle() {
    yield takeLatest(CONSTANTS.UPDATE_ARTICLE, workers.updateArticleWorker);
}

export function* watchDeleteArticle() {
    yield takeLatest(CONSTANTS.DELETE_ARTICLE, workers.deleteArticleWorker);
}

export function* watchGetCategories() {
    yield takeLatest(CONSTANTS.GET_CATEGORIES, workers.getCategoriesWorker);
}