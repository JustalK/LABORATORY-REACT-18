import { useDeferredValue } from 'react';

const NumberList = ({ n }: { n: number }) => {
  const deferredNumber = useDeferredValue(n);
  return (
    <ul>
      {Array.from({ length: deferredNumber }).map((_v, i: number) => (
        <li key={i}>${i}</li>
      ))}
    </ul>
  );
};

export default NumberList;
