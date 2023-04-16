import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import BooksPage from './pages/books/BooksPage';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/books'} element={<BooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
