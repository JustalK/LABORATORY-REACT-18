/**
 * Using the useTransition for getting a change
 * @module Experiences/Experience1
 */

import React, { Profiler, useState, useDeferredValue, Suspense } from 'react';
import Children from './Children';
import Children2 from './Children2';

const onRender = (id: string, phase: string, actualDuration: number) => {
  console.log(id, phase, actualDuration);
};

/**
 * @function Experience
 * You can try to spam the button, you should see the Loading appeared from time to time
 * @return {Object} Return the dom
 */
const Experience = () => {
  const [number2, setNumber2] = useState(0);
  const [number, setNumber] = useState(0);

  return (
    <Profiler id="Experience" onRender={onRender}>
      <div>
        Pay attention to the update on this component and when the 20000 appear
      </div>
      <button onClick={() => setNumber(20000)}>Number to high value</button>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <hr />
      <button onClick={() => setNumber2(20000)}>
        Number to high value with useDeferredValue
      </button>
      <input
        type="text"
        value={number2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />

      <Children n={number} />
      <Children2 n={number2} />
    </Profiler>
  );
};

export default Experience;
