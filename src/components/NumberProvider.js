import React, { useState } from "react";
import NumberContext from "../contexts/NumberContexts";
export default props => {
  const [number, setNumber] = useState(5);

  const updateNumber = () => {
    setNumber(() => Math.random());
  };

  return (
    <NumberContext.Provider
      value={{
        number: number,
        updateNumber: updateNumber
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};
