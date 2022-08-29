import React, { Profiler, useState } from 'react';
import { flushSync } from 'react-dom';

const onRender = (id: string, phase: string, actualDuration: number) => {
  console.log(id, phase, actualDuration);
};

/**
 * @function Experience
 * Profile the app for knowing when everything re-render
 * @return {Object} Return the dom of the Experience
 */
const Experience = () => {
  const [val, setVal] = useState(0);
  const [val2, setVal2] = useState(0);

  const singleReRender = () => {
    setVal((c) => c + 1);
    setVal2((c) => val + 1);
  };

  const doubleReRenderForce = () => {
    // Force rerender before executing next
    flushSync(() => {
      setVal((c) => c + 1);
    });
    flushSync(() => {
      setVal2((c) => val + 1);
    });
  };

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Value: {val}</div>
      <div>Value2: {val2}</div>
      <button onClick={doubleReRenderForce}>
        Double Re Render with flushSync and look in the console
      </button>
      <button onClick={singleReRender}>
        Single Re Render and look in the console
      </button>
    </Profiler>
  );
};

export default Experience;
