import { configureStore, Middleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

const loggerMiddleware =
  import.meta.env.NODE_ENV !== 'production' && createLogger();

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      sagaMiddleware as Middleware,
      loggerMiddleware as Middleware
    ),
});

sagaMiddleware.run(rootSaga);

export default store;
