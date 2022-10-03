import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LocalStorage from "./hooks/set_one/LocalStorage";
import ArrayComponent from "./hooks/set_two/ArrayComponent";
import DebounceComponent from "./hooks/set_two/DebounceComponent";
import TimeoutComponent from "./hooks/set_two/TimeoutComponent";
import ToggleComponent from "./hooks/set_two/ToggleComponent";
import UpdateEffectComponent from "./hooks/set_two/UpdateEffectComponent";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/localStorage" element={<LocalStorage />} />
          <Route path="/toggleValue" element={<ToggleComponent />} />
          <Route path="/timeout" element={<TimeoutComponent />} />
          <Route path="/debounce" element={<DebounceComponent />} />
          <Route path="/updateEffect" element={<UpdateEffectComponent />} />
          <Route path="/arrays" element={<ArrayComponent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
