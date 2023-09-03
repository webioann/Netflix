import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import store from "./redux/store"
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

let moch_user = {
    title: 'MOCH_USER CONTEXT DATA'
}

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
