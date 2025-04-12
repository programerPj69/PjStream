import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Tv2, User, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../lib/supabase';

function Navbar() {
  const { session } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Play className="w-8 h-8 text-purple-500" />
            <span className="text-xl font-bold">StreamPJ</span>
          </Link>
          
          <div className="flex items-center space-x-6">
            <Link to="/live" className="flex items-center space-x-1 hover:text-purple-500 transition">
              <Tv2 className="w-5 h-5" />
              <span>Live</span>
            </Link>
            {session ? (
              <>
                <Link to="/profile" className="flex items-center space-x-1 hover:text-purple-500 transition">
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-purple-500 transition"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" className="flex items-center space-x-1 hover:text-purple-500 transition">
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;