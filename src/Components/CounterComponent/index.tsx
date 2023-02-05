import { log } from 'console';
import React, { useState, useEffect } from 'react';
import './counter.css';

type CounterPropsType = {
  title: string;
  count?: number;
};

const Counter = (props: CounterPropsType) => {
  const { title } = props;

  const [count, setCount] = useState(0);

  console.log('CounterComponent');

  useEffect(() => {
    console.log('CounterComponent MOUNT');
  }, []);

  // useEffect(() => {
  //   console.log('CounterComponent UPDATE');

  //   return () => console.log('CounterComponent WILLUPDATE');
  // }, [count]);

  const decrementHandler = () => {
    // setCount((prev) => {
    //   if (prev === 0) {
    //     return prev;
    //   }
    //   return prev - 1;
    // });
    setCount((prev) => prev - 1);
  };

  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="counter_wrapper">
      <h1>{title}</h1>
      <div className="counter_group">
        <button disabled={count === 0} onClick={decrementHandler}>
          remove
        </button>
        <h2>{count}</h2>
        <button onClick={incrementHandler}>add</button>
      </div>
    </div>
  );
};

export const CounterComponent = React.memo(Counter, (prev, next) => prev.title === next.title);
