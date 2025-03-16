
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full py-4 px-6 md:px-16 border-b border-gray-800 sticky top-0 z-50 bg-black bg-opacity-95 backdrop-blur-sm">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/" className="text-xl font-bold text-white hover:text-neon-blue transition-colors">
            Aryan Shukla
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          <NavItem to="/" isActive={isActive('/')}>
            Home
          </NavItem>
          <NavItem to="/projects" isActive={isActive('/projects')}>
            Projects
          </NavItem>
          <NavItem to="/contact" isActive={isActive('/contact')}>
            Contact
          </NavItem>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-cyber-gray p-4 border-b border-gray-800 flex flex-col space-y-4">
          <MobileNavItem to="/" isActive={isActive('/')} onClick={() => setIsMenuOpen(false)}>
            Home
          </MobileNavItem>
          <MobileNavItem to="/projects" isActive={isActive('/projects')} onClick={() => setIsMenuOpen(false)}>
            Projects
          </MobileNavItem>
          <MobileNavItem to="/contact" isActive={isActive('/contact')} onClick={() => setIsMenuOpen(false)}>
            Contact
          </MobileNavItem>
        </div>
      )}
    </nav>
  );
};

interface NavItemProps {
  children: React.ReactNode;
  to: string;
  isActive: boolean;
}

const NavItem = ({ children, to, isActive }: NavItemProps) => {
  return (
    <Link
      to={to}
      className={`font-medium transition-all duration-300 px-4 py-2 rounded-md ${
        isActive
          ? 'text-white border border-neon-blue animate-border-glow'
          : 'text-gray-300 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

interface MobileNavItemProps extends NavItemProps {
  onClick: () => void;
}

const MobileNavItem = ({ children, to, isActive, onClick }: MobileNavItemProps) => {
  return (
    <Link
      to={to}
      className={`block py-2 px-4 font-medium transition-colors ${
        isActive
          ? 'text-neon-blue'
          : 'text-gray-300 hover:text-white'
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Navbar;
