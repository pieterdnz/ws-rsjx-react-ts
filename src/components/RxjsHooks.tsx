import React, { useState, useEffect } from "react";
import { useObservable } from "rxjs-hooks";
import { of, interval, Observable } from "rxjs";
import { delay, endWith, startWith, map } from "rxjs/operators";

interface IProps {
  name: string;
  intervalValue: number;
}

const RxjsHooks: React.FC<IProps> = ({ name, intervalValue }) => {
  //const names = useObservable(getObservableNames$(5000));
  const value = useObservable(() =>
    interval(intervalValue).pipe(map(val => val * 3))
  );

  return (
    <div className="rxjs-hooks">
      <h1>
        {name} Incremental number: {value}
      </h1>
    </div>
  );
};

export default RxjsHooks;
