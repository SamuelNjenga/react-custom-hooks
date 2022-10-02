import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LocalStorage from "./hooks/set_one/LocalStorage";
import DebounceComponent from "./hooks/set_two/DebounceComponent";
import TimeoutComponent from "./hooks/set_two/TimeoutComponent";
import ToggleComponent from "./hooks/set_two/ToggleComponent";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/localStorage" element={<LocalStorage />} />
          <Route path="/toggleValue" element={<ToggleComponent />} />
          <Route path="/timeout" element={<TimeoutComponent />} />
          <Route path="/debounce" element={<DebounceComponent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
