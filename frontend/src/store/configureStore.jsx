import * as redux from 'redux';
import createSagaMiddleware, { END } from 'redux-saga'
import reducer from '../reducers/reducer'

export const configureStore = (initialState = {}) => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = redux.compose(
        redux.applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );

    const store = redux.createStore(reducer, initialState, middlewares);

    if (module.hot) {
        module.hot.accept(
            '../reducers/reducer',
            () => store.replaceReducer(require('../reducers/reducer').default)
        );
    }

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
};

export default configureStore
