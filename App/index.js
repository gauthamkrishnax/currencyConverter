import React from "react";
import Navigation from "./config/Navigation";
import { ConversionContextProvider } from "./util/ConversionContext";

const Index = () => {
  return (
    <ConversionContextProvider>
      <Navigation />
    </ConversionContextProvider>
  );
};

export default Index;
