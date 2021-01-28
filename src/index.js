import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


let rerenderEntireTree = (state) => {
    debugger;
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
            {/* в пропсах App лежить appState І ЦЕ ОЗНАЧАЄ ЩО
    state всередині цих пропсів. Ми можемо викликати з appState діалоги наприклад, в App.js*/}
        </BrowserRouter>,
        document.getElementById("root")
    );
};

rerenderEntireTree(store.getState());
//инкапсулировать олигку значит скрить детали от внешнего человека, чтоби человек пользовался методом render, а что внутри ему знать не важно
// _ перед об'єктом означає, що создатель не хотів що цим об'єктом користувалися з зовнішнього світу(ui)
// метод всередині себе може звертатися до приватних переменних і надавати їм value

store.subscribe(()=>{
    let state = store.getState()
    rerenderEntireTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
