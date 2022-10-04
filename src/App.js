import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScriptComponent from "./hooks/set_four/ScriptComponent";
import LocalStorage from "./hooks/set_one/LocalStorage";
import AsyncComponent from "./hooks/set_three/AsyncComponent";
import FetchComponent from "./hooks/set_three/FetchComponent";
import PreviousComponent from "./hooks/set_three/PreviousComponent";
import StateWithHistoryComponent from "./hooks/set_three/StateWithHistoryComponent";
import StorageComponent from "./hooks/set_three/StorageComponent";
import ArrayComponent from "./hooks/set_two/ArrayComponent";
import DebounceComponent from "./hooks/set_two/DebounceComponent";
import TimeoutComponent from "./hooks/set_two/TimeoutComponent";
import ToggleComponent from "./hooks/set_two/ToggleComponent";
import UpdateEffectComponent from "./hooks/set_two/UpdateEffectComponent";
import DeepCompareEffectComponent from "./hooks/set_four/DeepCompareEffectComponent";
import EventListenerComponent from "./hooks/set_four/EventListenerComponent";
import OnScreenComponent from "./hooks/set_four/OnScreenComponent";
import WindowSizeComponent from "./hooks/set_four/WindowSizeComponent";
import MediaQueryComponent from "./hooks/set_five/MediaQueryComponent";

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
          <Route path="/previous" element={<PreviousComponent />} />
          <Route path="/historyState" element={<StateWithHistoryComponent />} />
          <Route path="/stateStorage" element={<StorageComponent />} />
          <Route path="/async" element={<AsyncComponent />} />
          <Route path="/fetch" element={<FetchComponent />} />
          <Route path="/script" element={<ScriptComponent />} />
          <Route path="/deepCompare" element={<DeepCompareEffectComponent />} />
          <Route path="/eventListener" element={<EventListenerComponent />} />
          <Route path="/onScreen" element={<OnScreenComponent />} />
          <Route path="/windowSize" element={<WindowSizeComponent />} />
          <Route path="/mediaQuery" element={<MediaQueryComponent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
