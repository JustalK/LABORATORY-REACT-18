import { lazy } from 'react';
import Children from './Children';
const Children2 = lazy(() => import('./Children2'));
const Children3 = lazy(() => import('./Children3'));
import { Suspense } from 'react';

const Experience = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Children value={1} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Children2 value={25} />
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Children3 value={45} />
      </Suspense>
    </>
  );
};

export default Experience;
