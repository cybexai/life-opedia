import * as constants from './constants';

const initialState = {
    loading: false,
    articles: [],
    categories: [],
};

const reducer = (state = initialState, action: any) => {
    let nextState;

    switch (action.type) {
        
        case constants.GET_ARTICLES:
            nextState = {
                ...state,
                loading: true,
            };
            return nextState || state;

        case constants.SET_ARTICLES:
            nextState = {
                ...state,
                articles: action.articles,
                loading: false,
            };
            return nextState || state;

        case constants.SET_CATEGORIES:
            nextState = {
                ...state,
                categories: action.categories,
                loading: false,
            };
            return nextState || state;
        
        default:
            return state;
    }
};

export default reducer;
