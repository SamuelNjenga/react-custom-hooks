import React from "react";

import useOnlineStatus from "./useOnlineStatus";

const OnlineStatusComponent = () => {
  const online = useOnlineStatus();
  return <div>{online.toString()}</div>;
};

export default OnlineStatusComponent;
