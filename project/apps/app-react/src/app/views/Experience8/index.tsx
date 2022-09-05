import React, { Profiler } from 'react';
import Children from './Children';

const onRender = (id: string, phase: string, actualDuration: number) => {
  console.log(id, phase, actualDuration);
};

export default function App() {
  return (
    <Profiler id="Experience" onRender={onRender}>
      <div className="App">
        <button className="theme">Parent Button</button>
        <hr />
        <Children />
      </div>
    </Profiler>
  );
}
