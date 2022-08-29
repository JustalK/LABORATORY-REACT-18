import React, { Profiler, useState } from 'react';

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

  // This code use to do a double rerender in React 16
  const doubleReRenderReact16 = () => {
    setTimeout(singleReRender, 0);
  };

  const singleReRender = () => {
    setVal((c) => c + 1);
    setVal2((c) => val + 1);
  };

  // Still the problem of double rerender with settimeout of
  const doubleReRender = () => {
    setVal((c) => c + 1);
    setTimeout(() => setVal2((c) => val + 1), 0);
  };

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>Value: {val}</div>
      <div>Value2: {val2}</div>
      <button onClick={doubleReRenderReact16}>
        Double Re Render in React 16 and look in the console
      </button>
      <button onClick={doubleReRender}>
        Double Re Render and look in the console
      </button>
      <button onClick={singleReRender}>
        Single Re Render and look in the console
      </button>
    </Profiler>
  );
};

export default Experience;
