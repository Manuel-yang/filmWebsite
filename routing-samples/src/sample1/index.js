import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

export const About = () => {
  return <h2>About page</h2>;
};

export const Inbox = () => {
  return <h2>Inbox page</h2>;
};

const Home = () => {
  return <h1>Home page</h1>;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={ <About /> } />
        <Route path="/inbox" element={ <Inbox /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
