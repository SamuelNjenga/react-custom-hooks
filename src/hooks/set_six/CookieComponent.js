import React from "react";

import useCookie from "./useCookie";

const CookieComponent = () => {
  const [value, update, remove] = useCookie("name", "Samuel");

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update("Njenga")}>Change Name To Njenga</button>
      <button onClick={remove}>Delete Name</button>
    </>
  );
};

export default CookieComponent;
