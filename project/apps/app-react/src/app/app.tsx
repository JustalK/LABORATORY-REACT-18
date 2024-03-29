import { Route, Routes, Link } from 'react-router-dom';
import Experience1 from './views/Experience1';
import Experience2 from './views/Experience2';
import Experience3 from './views/Experience3';
import Experience4 from './views/Experience4';
import Experience5 from './views/Experience5';
import Experience6 from './views/Experience6';
import Experience7 from './views/Experience7';
import Experience8 from './views/Experience8';

export function App() {
  return (
    <>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Experience1</Link>
          </li>
          <li>
            <Link to="/experience2">Experience2</Link>
          </li>
          <li>
            <Link to="/experience3">Experience3</Link>
          </li>
          <li>
            <Link to="/experience4">Experience4</Link>
          </li>
          <li>
            <Link to="/experience5">Experience5</Link>
          </li>
          <li>
            <Link to="/experience6">Experience6</Link>
          </li>
          <li>
            <Link to="/experience7">Experience7</Link>
          </li>
          <li>
            <Link to="/experience8">Experience8</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Experience1 />} />
        <Route path="/experience2" element={<Experience2 />} />
        <Route path="/experience3" element={<Experience3 />} />
        <Route path="/experience4" element={<Experience4 />} />
        <Route path="/experience5" element={<Experience5 />} />
        <Route path="/experience6" element={<Experience6 />} />
        <Route path="/experience7" element={<Experience7 />} />
        <Route path="/experience8" element={<Experience8 />} />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
