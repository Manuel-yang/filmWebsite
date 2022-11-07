import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import { About } from "../sample1";
import Inbox from "./inbox";

const Home = () => {
  return (
    <>
      <h2>Home page</h2>
      <p>
        Try <Link to="/inbox/1234"> this hyperlink</Link>
        <span> or </span>
        <Link to="/inbox/4321"> this one</Link>
      </p>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={ <About /> } />
        <Route path="/inbox/:userId" element={ <Inbox /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
