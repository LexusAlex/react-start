import React from 'react';
import ReactDOM from 'react-dom/client';
import "./script";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.module.css";
import Application from "./components/Application/Apllication";
import BootstrapClient from "./components/BootstrapClient";
import Application2 from "./components/Application/Application2";
import Application3 from "./components/Application/Application3";

const root = ReactDOM.createRoot(document.getElementById('root'));
const date = new Date();
root.render(
  <React.StrictMode>
    <Application3/>
    <BootstrapClient></BootstrapClient>
  </React.StrictMode>
);
