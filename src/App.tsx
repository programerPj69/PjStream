import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Watch from './pages/Watch';
import Live from './pages/Live';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const { session } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/live" element={<Live />} />
            <Route 
              path="/profile" 
              element={session ? <Profile /> : <Navigate to="/login" />} 
            />
            <Route 
              path="/login" 
              element={!session ? <Login /> : <Navigate to="/profile" />} 
            />
            <Route 
              path="/signup" 
              element={!session ? <Signup /> : <Navigate to="/profile" />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;