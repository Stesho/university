import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import BooksPage from './pages/books/BooksPage';
import RegistrationPage from './pages/registration/RegistrationPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginPage from './pages/login/LoginPage';
import AuthorsPage from './pages/authors/AuthorsPage';
import AccountPage from './pages/account/AccountPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/books'} element={<BooksPage />} />
        <Route path={'/authors'} element={<AuthorsPage />} />
        <Route path={'/genres'} element={<HomePage />} />
        <Route path={'/contacts'} element={<HomePage />} />
        <Route path={'/registration'} element={<RegistrationPage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/account'} element={<AccountPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
