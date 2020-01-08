import React, { useState, useEffect } from "react";
import { useObservable } from "rxjs-hooks";
import { of, interval, Observable, range } from "rxjs";
import {
  map,
  concat,
  filter,
  tap,
  take,
  delay,
  concatMap
} from "rxjs/operators";

const source = [
  "Adam",
  "Brian",
  "Christine",
  "Pieter",
  "Henk",
  "Leo",
  "Darius",
  "Maarten",
  "Paul",
  "Gerwin",
  "Pascal"
];

interface IProps {
  name: string;
  intervalValue: number;
}

const Range: React.FC<IProps> = ({ name, intervalValue }) => {
  //const names = useObservable(getObservableNames$(5000));
  const value = useObservable(() =>
    range(5, source.length).pipe(
      take(source.length),

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
export default Range;
