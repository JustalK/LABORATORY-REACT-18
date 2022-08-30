import { Profiler, useState, useTransition } from 'react';
import { startTransition } from 'react';

const onRender = (id: string, phase: string, actualDuration: number) => {
  console.log(id, phase, actualDuration);
};

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [fibItem, setFibItem] = useState(35);
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);
  const [isPending, startTransition] = useTransition();

  const singleReRender = () => {
    setVal((c) => c + 1);
  };

  /**
   * Bad Recursive implementation of the fibonacci sequence
   * @param x The number to find in the fibonacci
   * @returns The ith element in the sequence
   */
  const fib: (x: number) => number = (x: number) => {
    if (x <= 0) return 0;
    if (x == 1) return 1;
    return fib(x - 1) + fib(x - 2);
  };

  const singleReRenderTransition = () => {
    setVal((c) => c + 1);
    startTransition(() => {
      setVal2((c) => fib(fibItem));
    });
  };

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Set the element to find in the fib sequence (careful the calculation goes high really fast)</div>
      Element in fib: <input value={fibItem} onChange={(e) => setFibItem(Number(e.target.value))} />
      <div>Value: {val}</div>
      <div>Value2 (fib): {isPending ? 'Loading' : val2}</div>
      <button onClick={singleReRender}>Increase Val</button>
      <button onClick={singleReRenderTransition}>Increase Val and Val2</button>
    </Profiler>
  );
};

export default Experience;
