import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';

const Home = lazy(() => import('./pages/home'));
const Page2 = lazy(() => import('./pages/page2'));
const Page3 = lazy(() => import('./pages/page3'));
const Page4 = lazy(() => import('./pages/page4'));
const Page5 = lazy(() => import('./pages/page5'));
const Page6 = lazy(() => import('./pages/page6'));
const Page7 = lazy(() => import('./pages/page7'));
const Page8 = lazy(() => import('./pages/page8'));
const Nave = lazy(() => import('./pages/navebar'));

function App() {
  return (
    <Router>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Page5" element={<Page5 />} />
          <Route path="/Page6" element={<Page6 />} />
          <Route path="/Page7" element={<Page7 />} />
          <Route path="/Page8" element={<Page8 />} />
          <Route path="/Nave" element={<Nave />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;