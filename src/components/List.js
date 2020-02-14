import React from "react";

export default ({ data, render }) => {
  return (
    <div>
      {data.map(item => {
        return render(item);
      })}
    </div>
  );
};
