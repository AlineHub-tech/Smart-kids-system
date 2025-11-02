import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Member from './pages/Member';
import Attendance from './pages/Attendance';
import History from './pages/History';
import Settings from './pages/Settings';
import Collaboration from './pages/Collaboration';
import Info from './pages/Info';
import Landing from "./pages/Landing";
import Login from './pages/Login';
import Logout from './pages/Logout';
import { AppProvider } from './Context/AppContext';

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <div className="app-root">
          <Navbar />
          <div className="main-area">
            <Sidebar />
            <main className="content-area">
              <Routes>
                <Route path="/" element={<Navigate to="/landing" replace />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/member" element={<Member />} />
                <Route path="/attendance" element={<Attendance />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/collaboration" element={<Collaboration />} />
                <Route path="/info" element={<Info />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
              <Footer />
            </main>
          </div>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
}
