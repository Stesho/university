import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegistrationPage from './pages/registration/RegistrationPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import LoginPage from './pages/login/LoginPage';
import AccountPage from './pages/account/AccountPage';
import Profile from './pages/account/menu/./profile/Profile';
import Settings from './pages/account/menu/settings/Settings';
import StudentsTablePage from './pages/students/studentsTable/StudentsTablePage';
import Marks from './pages/account/menu/marks/Marks';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'login'} element={<LoginPage />} />
        <Route path={'registration'} element={<RegistrationPage />} />
        <Route path={'students'} element={<StudentsTablePage />} />
        <Route path={'account'} element={<AccountPage />}>
          <Route index element={<Navigate to="/account/profile" />} />
          <Route path={'/account/profile'} element={<Profile />} />
          <Route path={'/account/marks'} element={<Marks />} />
          <Route path={'/account/settings'} element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
