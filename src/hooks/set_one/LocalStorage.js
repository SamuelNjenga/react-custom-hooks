import React from "react";

import useLocalStorage from "./useLocalStorage";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default LocalStorage;
