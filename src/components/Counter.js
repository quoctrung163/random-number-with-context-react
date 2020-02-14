import React, { useEffect, useState } from "react";

export default props => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // DidMount
    const timerId = setInterval(() => {
      setCount(() => count + 1);
    }, 1000);

    // UnMount
    return function cleanup() {
      clearInterval(timerId);
    };
  });

  return <div>{props.children(count)}</div>;
};
