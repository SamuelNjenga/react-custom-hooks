import React, { useState } from "react";

import useEventListener from "./useEventListener";

const EventListenerComponent = () => {
  const [key, setKey] = useState("");
  useEventListener("keydown", (e) => {
    setKey(e.key);
  });

  return <div>Last key: {key}</div>;
};

export default EventListenerComponent;
