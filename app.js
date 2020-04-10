import React from "react";
import ReactDOM from "react-dom";
import { Provider  } from "react-redux";
import { createStore } from "redux";

import App from "./app/containers/app";
import reducer from './app/containers/app/reducer';

// styles
import './app/styles/master.less';

const store =  createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.querySelector("#root"));
