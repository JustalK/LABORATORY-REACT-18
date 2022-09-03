import { lazy } from 'react';
import Children from './Children';
const Children2 = lazy(() => import('./Children2'));
import { Suspense } from 'react';

const Experience = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Children value={1} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Children2 value={40} />
      </Suspense>
    </>
  );
};

export default Experience;
