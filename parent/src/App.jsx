import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import Welcome from "./components/Welcome";
import StoreOne from "./components/StoreOne";
// import StoreTwo from "./components/StoreTwo";
import AddProduct from "./components/AddProduct";

const App = () => { 

  return(
  <div className="App">
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/storeOne" element={<StoreOne />} />
        {/* <Route path="/storeTwo" element={<StoreTwo />} /> */}
        <Route path="/addProduct" element={<AddProduct />} />
      </Routes>
    </BrowserRouter>
  </div>
)};
ReactDOM.render(<App />, document.getElementById("app"));
