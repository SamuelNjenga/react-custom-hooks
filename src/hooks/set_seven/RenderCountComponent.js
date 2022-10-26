import React from "react";

import useToggle from "../set_two/useToggle";
import useRenderCount from "./useRenderCount";

const RenderCountComponent = () => {
  const [boolean, toggle] = useToggle(false);

  const renderCount = useRenderCount();
  
  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
};

export default RenderCountComponent;
