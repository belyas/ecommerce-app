import React from 'react';
import logo from './logo.svg';
import './App.css';
var App = function () {
    return (React.createElement("div", { className: "app" },
        React.createElement("header", { className: "app-header" },
            React.createElement("img", { src: logo, className: "app-logo", alt: "logo" }),
            React.createElement("p", null, "Welcome Yassine :)"))));
};
export default App;
