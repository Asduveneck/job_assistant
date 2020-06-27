import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

export const persistor = persistStore(store);
// sagaMiddleware.run(entitySaga);
