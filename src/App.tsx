import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<AboutPage />} path="/about" />
      <Route
        path="*"
        element={<Navigate to="/" replace />}
    />
    </Routes>
  );
}

export default App;
