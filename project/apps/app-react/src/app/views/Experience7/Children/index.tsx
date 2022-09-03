const NumberList = ({ n }: { n: number }) => {
  return (
    <ul>
      {Array.from({ length: n }).map((_v, i: number) => (
        <li key={i}>${i}</li>
      ))}
    </ul>
  );
};

export default NumberList;
