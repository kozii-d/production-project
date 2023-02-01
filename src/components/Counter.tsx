import React, {useState} from 'react';
import classes from "./Counter.module.scss"

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

const increment = () => setCount(prevState => prevState + 1)

  return (
    <div className={classes.btn}>
      <div>{count}</div>
      <button onClick={increment}>increment</button>
    </div>
  );
};
