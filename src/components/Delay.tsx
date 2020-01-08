import React, { useState, useEffect } from "react";
import { useObservable } from "rxjs-hooks";
import { of, interval, Observable, from } from "rxjs";
import {
  map,
  concat,
  delay,
  filter,
  tap,
  take,
  concatMap,
  concatAll,
  mergeMap
} from "rxjs/operators";

// const source = [
//   "Adam",
//   "Brian",
//   "Christine",
//   "Pieter",
//   "Henk",
//   "Leo",
//   "Darius",
//   "Maarten",
//   "Paul",
//   "Gerwin",
//   "Pascal"
// ];

interface IProps {
  name: string;
  intervalValue: number;
  source: string[];
}

const Delay: React.FC<IProps> = ({ name, intervalValue, source }) => {
  //const names = useObservable(getObservableNames$(5000));
  const value = useObservable(() =>
    of(source).pipe(
      tap(val => console.log(val)),
      mergeMap(x => from(x)),

      concatMap(x => of(x).pipe(delay(1000))),

      //concat(),
      tap(val => console.log(val))
    )
  );

  return (
    <div className="watch">
      <h3>
        {name}
        {value}
      </h3>
    </div>
  );
};
const List = (props: { items: string[] }) => (
  <ul>
    {props.items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
export default Delay;
