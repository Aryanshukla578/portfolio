
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-black px-4">
      <div className="bg-cyber-gray p-8 rounded-lg border border-gray-800 max-w-md w-full text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-black">
            <AlertTriangle size={60} className="text-neon-pink" />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 neon-text-pink">404</h1>
        <h2 className="text-2xl font-semibold mb-6 text-white">Access Denied</h2>
        <p className="text-gray-300 mb-8">
          The resource you are looking for has either been moved to a secure location or does not exist.
        </p>
        <Link 
          to="/"
          className="inline-block py-3 px-6 bg-black text-white hover:text-neon-blue border border-gray-700 hover:border-neon-blue rounded-md transition-all duration-300"
        >
          Return to Home Base
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
