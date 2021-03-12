import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./screens/routes";
import Container from "./container";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Container routes={Routes} />
      </BrowserRouter>
    </>
  );
};

export default App;
