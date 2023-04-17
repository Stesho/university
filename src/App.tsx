import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import BooksPage from './pages/books/BooksPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import Header from './components/header/Header';
import LoginPage from './pages/login/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/books'} element={<BooksPage />} />
        <Route path={'/authors'} element={<HomePage />} />
        <Route path={'/genres'} element={<HomePage />} />
        <Route path={'/contacts'} element={<HomePage />} />
        <Route path={'/registration'} element={<RegistrationPage />} />
        <Route path={'/login'} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
