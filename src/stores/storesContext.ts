import React from "react";
import HomeStore from "./store/HomeStore";

export const storesContext = React.createContext({
  homeStore: new HomeStore(),
});
