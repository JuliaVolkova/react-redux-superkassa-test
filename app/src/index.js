import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore, dispatch} from 'redux';
import {AppContainer} from 'react-hot-loader';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'
import './index.css';
import App from './components/App';
import combineReducer from './reducers';
import rootSaga from "./saga";

const initialState = { isClicked: false };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(sagaMiddleware, logger);

export const store = createStore(combineReducer, initialState, composeEnhancers(middleware));
sagaMiddleware.run(rootSaga);

const render = Component => {
    ReactDOM.render(
        <Provider store={store}>
                <AppContainer>
                    <Component/>
                </AppContainer>
        </Provider>,
        document.getElementById('root'),
    )
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App)
    })
}
