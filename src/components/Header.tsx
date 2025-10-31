// React Component: Header with responsive navigation
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  // React Hooks: useState for component state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { isAuthenticated, user, logout } = useAuth();
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  
  // React Hooks: useEffect for side effects
  useEffect(() => {
    // DOM Manipulation: Scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Event Handler: Mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  const handleLogout = () => {
    logout();
    clearCart();
    navigate('/');
  };
  
  // Calculate total cart items
  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-white/60 backdrop-blur-sm shadow-md'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center" role="navigation" aria-label="Main Navigation">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0" onClick={handleNavClick}>
          <img
            src="https://www.shutterstock.com/image-vector/beautiful-woman-face-logo-hair-260nw-2436321179.jpg"
            alt="House of Ishvita Logo"
            className="w-12 h-12 rounded-full object-cover"
            loading="lazy"
          />
          <span className="text-xl md:text-3xl font-black text-gray-900 whitespace-nowrap">
            House of Ishvita
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/party-wear" className="nav-link">Party Wear</Link>
          <Link to="/ethnic-wear" className="nav-link">Ethnic</Link>
          <Link to="/professional" className="nav-link">Professional</Link>
          <Link to="/casual" className="nav-link">Casual</Link>
          <Link to="/style-assistant" className="nav-link text-primary">✨ Style Assistant</Link>
        </div>
        
        {/* Right Section: Auth & Cart */}
        <div className="hidden md:flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="text-base font-bold text-gray-900">Hi, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-bold shadow-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/signin">
              <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-bold shadow-lg">
                Sign In
              </button>
            </Link>
          )}
          
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <button className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-red-600 transition-colors font-bold shadow-lg flex items-center gap-2">
              🛒 Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={`w-6 h-0.5 bg-secondary transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-secondary transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-secondary transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white backdrop-blur-md transition-all duration-300 z-40 shadow-xl ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          <Link to="/" className="nav-link-mobile" onClick={handleNavClick}>Home</Link>
          <Link to="/party-wear" className="nav-link-mobile" onClick={handleNavClick}>Party Wear</Link>
          <Link to="/ethnic-wear" className="nav-link-mobile" onClick={handleNavClick}>Ethnic</Link>
          <Link to="/professional" className="nav-link-mobile" onClick={handleNavClick}>Professional</Link>
          <Link to="/casual" className="nav-link-mobile" onClick={handleNavClick}>Casual</Link>
          <Link to="/style-assistant" className="nav-link-mobile text-primary font-bold" onClick={handleNavClick}>✨ Style Assistant</Link>
          
          <div className="border-t pt-4 mt-2 flex flex-col gap-3">
            {isAuthenticated ? (
              <>
                <span className="text-sm text-textLight">Hi, {user?.name}</span>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link to="/signin" onClick={handleNavClick}>
                <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors">
                  Sign In
                </button>
              </Link>
            )}
            
            <Link to="/cart" onClick={handleNavClick}>
              <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors relative">
                🛒 Cart
                {cartItemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      <style>{`
        .nav-link {
          position: relative;
          font-weight: 500;
          color: var(--text-dark);
          transition: color 0.3s;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--primary-color);
          transition: width 0.3s;
        }
        
        .nav-link:hover {
          color: var(--primary-color);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link-mobile {
          padding: 12px 0;
          font-weight: 500;
          color: var(--text-dark);
          border-bottom: 1px solid #e5e5e5;
          transition: color 0.3s;
        }
        
        .nav-link-mobile:hover {
          color: var(--primary-color);
        }
      `}</style>
    </header>
  );
};

export default Header;
