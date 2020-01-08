import React, { useState, useEffect } from "react";

import { of, interval, Observable } from "rxjs";
import { delay, endWith, startWith, map } from "rxjs/operators";

const source = ["Adam", "Brian", "Christine"];

//does not work only one value
function getObservableNames$(mil = 1000) {
  return interval(mil).pipe(map(i => source.slice(0, i + 1)));
}
const names$ = interval(1000).pipe(map(i => source.slice(0, i + 1)));

const useObservable = (observable: Observable<string[]>) => {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};

interface IProps {
  name: string;
}

const Watch: React.FC<IProps> = ({ name }) => {
  //const names = useObservable(getObservableNames$(5000));
  const names = useObservable(names$);
  return (
    <div className="watch">
      <h3>{name}</h3>
      <List items={names} />
    </div>
  );
};
const List = ({ items = [], loading = false }) => (
  <ul className={loading ? "loading" : undefined}>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
export default Watch;
