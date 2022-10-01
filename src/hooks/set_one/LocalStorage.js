import React from "react";

import useLocalStorage from "./useLocalStorage";
import useUpdateLogger from "./useUpdateLogger";

const LocalStorage = () => {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default LocalStorage;
