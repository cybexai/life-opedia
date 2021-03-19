import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootSaga} from '../redux-saga';
import appReducer from './reducer';


const rootReducer = combineReducers({
    appState: appReducer,
});

export const store = () => {

    const sagaMiddleWare = createSagaMiddleware();

    return {
        ...createStore(rootReducer, applyMiddleware(sagaMiddleWare)),
        runSaga: sagaMiddleWare.run(rootSaga)
    }

}

export type RootState = ReturnType<typeof rootReducer>