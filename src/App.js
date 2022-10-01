import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LocalStorage from "./hooks/set_one/LocalStorage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/localStorage" element={<LocalStorage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
