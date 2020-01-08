import * as React from "react";
import { useState, useEffect } from "react";
import { render } from "react-dom";

import { interval } from "rxjs";
import { map } from "rxjs/operators";
import "./styles.css";

const source = ["Adam", "Brian", "Christine", "1"];
const names$ = interval(1000).pipe(map(i => source.slice(0, i + 1)));

const useObservable = observable => {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};

function App() {
  const names = useObservable(names$);

  return (
    <div className="App">
      <h1>RxJS with React</h1>
      <List items={names} />
    </div>
  );
}

const List = ({ items = [], loading = false }) => (
  <ul className={loading ? "loading" : null}>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
