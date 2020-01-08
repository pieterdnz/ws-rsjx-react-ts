import * as React from "react";

import "./App.css";
import Watch from "./components/Watch";
import Range from "./components/Range";
import RxjsHooks from "./components/RxjsHooks";
import RxjsHooksWatch from "./components/RxjsHooksWatch";
import Delay from "./components/Delay";
const App: React.FC = () => {
  const source = [
    "Pieter",
    "Henk",
    "Leo",
    "Darius",
    "Maarten",
    "Paul",
    "Gerwin",
    "Pascal"
  ];

  return (
    <div className="App">
      <Watch name="One" />
      <Watch name="Two" />
      <Delay name="Delay 1" intervalValue={1000} source={source} />
      <RxjsHooks name="Hook 1" intervalValue={500} />
      <RxjsHooks name="Hook 2" intervalValue={1000} />
      <RxjsHooksWatch
        name="Watch New Slow"
        intervalValue={10000}
        source={source}
      />
      <RxjsHooksWatch name="Watch New 1" intervalValue={1000} source={source} />
      <Range name="Range 1" intervalValue={1000} />
    </div>
  );
};

export default App;
