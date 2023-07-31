import reportWebVitals from './reportWebVitals';
// import store from './Redux/State';
import store from './Redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
let rerenderPage = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <BrowserRouter>
                    <App
                        store={store.getState()}
                        dispatch={store.dispatch.bind(store)} />
                </BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderPage();
store.subscribe(rerenderPage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();