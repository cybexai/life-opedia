import { AxiosResponse } from 'axios';
import { call, put } from 'redux-saga/effects';

import * as AdminApi from '../api';
import { ACTIONS } from '../redux';

export function* signinWorker(payload: any) {
    try {
        const response: AxiosResponse = yield call(AdminApi.signin, payload.user);

        if (response.status === 200) {
            payload.history.push('/')
        } else {
            alert('Paramètres de connexion incorrects')
        }

    } catch (error) {
        console.log(error);
    }
}

export function* getArticleWorker() {
    try {
        const response: AxiosResponse = yield call(AdminApi.getArticle);

        if (response.status === 200) {
            yield put(ACTIONS.setArticle(response.data));
        } else {
            alert('Une erreur est survenue')
        }

    } catch (error) {
        console.log(error);
    }
}

export function* saveArticleWorker(payload: any) {
    try {
        const response: AxiosResponse = yield call(AdminApi.saveArticle, payload.anneeScholaire);

        if (response.status === 201) {
            alert('Enregistré avec succès')
            yield put(ACTIONS.getArticles());
        } else {
            alert('Une erreur est survenue')
        }

    } catch (error) {
        console.log(error);
    }
}

export function* updateArticleWorker(payload: any) {
    try {
        const response: AxiosResponse = yield call(AdminApi.updateArticle, payload.anneeScholaire);

        if (response.status === 200) {
            yield put(ACTIONS.getArticles());
        } else {
            alert('Une erreur est survenue')
        }

    } catch (error) {
        console.log(error);
    }
}

export function* deleteArticleWorker(payload: any) {
    try {
        const response: AxiosResponse = yield call(AdminApi.deleteArticle, payload.anneeScholaireId);

        if (response.status === 200) {
            yield put(ACTIONS.getArticles());
        } else {
            alert('Une erreur est survenue')
        }

    } catch (error) {
        console.log(error);
    }
}

export function* getCategoriesWorker() {
    try {
        const response: AxiosResponse = yield call(AdminApi.getCategories);

        if (response.status === 200) {
            yield put(ACTIONS.setCategorie(response.data));
        } else {
            alert('Une erreur est survenue')
        }

    } catch (error) {
        console.log(error);
    }
}