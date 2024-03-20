import React from 'react';
import ReactDOM from 'react-dom/client';
import "./script";
import Application from "./components/Application/Apllication";

const root = ReactDOM.createRoot(document.getElementById('root'));
const date = new Date();
root.render(
  <React.StrictMode>
    <Application date={date}/>
  </React.StrictMode>
);
