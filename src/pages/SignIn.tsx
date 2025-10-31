// Authentication: Sign In Page with Form Validation
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    name: '',
    general: '',
  });
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  
  // Form Validation
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  const validateForm = () => {
    const newErrors = { email: '', password: '', name: '', general: '' };
    let isValid = true;
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }
    
    if (isSignUp && !formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    try {
      if (isSignUp) {
        await signup(formData.email, formData.password, formData.name);
        alert('Account created successfully! Welcome to House of Ishvita!');
      } else {
        await login(formData.email, formData.password);
        alert('Welcome back!');
      }
      navigate('/');
    } catch (error: any) {
      console.error('Authentication error:', error);
      setErrors({
        ...errors,
        general: error.message || 'Authentication failed. Please try again.',
      });
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };
  
  return (
    <div className="pt-20 min-h-screen bg-background flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-secondary mb-8">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h1>
        
        {errors.general && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg" role="alert">
            {errors.general}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {isSignUp && (
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-textDark mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
                aria-label="Full Name"
                aria-required="true"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1" role="alert">{errors.name}</p>
              )}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-textDark mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your email"
              aria-label="Email Address"
              aria-required="true"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1" role="alert">{errors.email}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-textDark mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter your password"
              aria-label="Password"
              aria-required="true"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1" role="alert">{errors.password}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="w-full px-6 py-4 bg-primary text-white rounded-lg hover:bg-secondary transition-colors font-semibold text-lg"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-primary hover:text-secondary transition-colors font-medium"
          >
            {isSignUp
              ? 'Already have an account? Sign In'
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
