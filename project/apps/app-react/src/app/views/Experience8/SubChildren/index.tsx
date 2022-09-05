import { useInsertionEffect, useState, Profiler } from 'react';

const onRender = (id: string, phase: string, actualDuration: number) => {
  console.log(id, phase, actualDuration);
};

const SubChildren = () => {
  const [color, setColor] = useState('red');
  useInsertionEffect(() => {
    const styleRule = getStyleRule(color);
    document.head.appendChild(styleRule);

    return () => {
      if (!styleRule) {
        return;
      }
      document.head.removeChild(styleRule);
    };
  }, [color]);

  const getStyleRule = (bgcolor: string) => {
    const styleElement = document.createElement('style');
    const rule = `
        .theme {
        background-color: ${bgcolor};
    `;
    styleElement.innerHTML = rule;
    return styleElement;
  };

  const changeColor = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  };

  return (
    <Profiler id="SubChildren" onRender={onRender}>
      <button onClick={changeColor} className="theme">
        SubChildrenButton
      </button>
    </Profiler>
  );
};

export default SubChildren;
