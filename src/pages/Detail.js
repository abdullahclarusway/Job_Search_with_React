import React from "react";
import { useLocation } from "react-router-dom";
function Detail() {
  const location = useLocation();
  const myparam = location.state.params;
  return (
    <div
      style={{
        margin: 40,
        padding: 40,
        border: "1px solid black",
        borderRadius: 10,
      }}
      dangerouslySetInnerHTML={{
        __html: myparam.data.description,
      }}
    ></div>
  );
}
export default Detail;
