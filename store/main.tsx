import { createStore, applyMiddleware } from "redux";
import createSaga from "redux-saga";

import reducer from "./reducer";
import { rootSaga } from "./saga";

const saga = createSaga();

const store = createStore(reducer, applyMiddleware(saga));

saga.run(rootSaga);

export default store;
