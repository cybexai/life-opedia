import { fork, all } from 'redux-saga/effects';

import * as app from './watchers';

export function* rootSaga() {

    yield all([
        ...Object.values(app),
    ].map(fork));

}