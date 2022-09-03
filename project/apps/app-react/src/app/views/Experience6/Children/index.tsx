const fib: (x: number) => number = (x: number) => {
  if (x <= 0) return 0;
  if (x == 1) return 1;
  return fib(x - 1) + fib(x - 2);
};

const Experience = ({ value }: { value: number }) => {
  return <div>This is a test (fib: {fib(value)})</div>;
};

export default Experience;
