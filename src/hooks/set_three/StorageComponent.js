import React from "react";

import { useSessionStorage, useLocalStorage } from "./useStorage";

const StorageComponent = () => {
  const [name, setName, removeName] = useSessionStorage("name", "Samuel");
  const [bonus, setBonus, removeBonus] = useLocalStorage("bonus", 29);

  return (
    <div>
      <div>
        {name} - {bonus}
      </div>
      <button onClick={() => setName("Njenga")}>Set Name</button>
      <button onClick={() => setBonus(39)}>Set Bonus</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeBonus}>Remove Bonus</button>
    </div>
  );
};

export default StorageComponent;
