import axios, { AxiosResponse } from 'axios';
import { SERVER_ADDRESS } from '../utilities';

export const signin = (user: any) => {

    return axios.post(`${SERVER_ADDRESS}auth/signin`, user
    ).then((response) => {
        return response
    }).catch((response) => {
        return response
    });
}

export const getArticle = () => {

    return axios
        .get(`${SERVER_ADDRESS}articles`)
        .then((response) => {
            return response;
        })
        .catch((response) => {
            return response;
        });
};

export const getArticleById = (id: string) => {

    return axios
        .get(`${SERVER_ADDRESS}articles/${id}`)
        .then((response) => {
            return response;
        })
        .catch((response) => {
            return response;
        });
};

export const saveArticle = (article: any) => {

    return axios.post(`${SERVER_ADDRESS}articles`, article
    ).then((response) => {
        return response
    }).catch((response) => {
        return response
    });
}

export const updateArticle = (article: any) => {

    return axios.put(`${SERVER_ADDRESS}articles`, article
    ).then((response) => {
        return response
    }).catch((response) => {
        return response
    });
}

export const deleteArticle = (articleId: string) => {

    return axios.delete(`${SERVER_ADDRESS}articles/${articleId}`
    ).then((response) => {
        return response
    }).catch((response) => {
        return response
    });
}

export const getCategories = () => {

    return axios
        .get(`${SERVER_ADDRESS}categories`)
        .then((response) => {
            return response;
        })
        .catch((response) => {
            return response;
        });
};