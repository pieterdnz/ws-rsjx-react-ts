import React, { useState, useEffect } from "react";
import { useObservable } from "rxjs-hooks";
import { of, interval, Observable } from "rxjs";
import { map, concat, filter, tap, take } from "rxjs/operators";

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

const RxjsHooksWatch: React.FC<IProps> = ({ name, intervalValue, source }) => {
  //const names = useObservable(getObservableNames$(5000));
  const value = useObservable(() =>
    interval(intervalValue).pipe(
      take(source.length),
      map(i => source.slice(0, i + 1)),
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
      {value && <List items={value} />}
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
export default RxjsHooksWatch;
