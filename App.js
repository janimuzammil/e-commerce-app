import React from "react";
import { NativeBaseProvider } from "native-base";

export default () => {
  return (
    <NativeBaseProvider>
      <App />
    </NativeBaseProvider>
  );
};

