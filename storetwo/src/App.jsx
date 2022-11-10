import React from "react";
import ReactDOM from "react-dom";
import RestAPI from './components/RestAPI';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <>
    <RestAPI />
  </>
);
ReactDOM.render(<App />, document.getElementById("app"));
