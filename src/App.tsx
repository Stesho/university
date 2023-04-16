import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Books from './pages/Books/Books';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/books'} element={<Books />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
