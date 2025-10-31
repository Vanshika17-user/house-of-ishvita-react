// Authentication Context: JWT and session management
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { AuthState, User } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (email: string, password: string, name: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    loading: true,
  });
  
  // Check for existing session on mount
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        setAuthState({
          user,
          isAuthenticated: true,
          loading: false,
        });
      } catch (error) {
        console.error('Failed to parse user data:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setAuthState({ user: null, isAuthenticated: false, loading: false });
      }
    } else {
      setAuthState({ user: null, isAuthenticated: false, loading: false });
    }
  }, []);
  
  // Authentication: JWT-based login
  const login = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, loading: true }));
    
    try {
      // Check if user exists in localStorage
      const usersStr = localStorage.getItem('registeredUsers');
      const users = usersStr ? JSON.parse(usersStr) : [];
      
      // Find user with matching email and password
      const existingUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (existingUser) {
        // User found - login successful
        const user: User = {
          id: existingUser.id,
          email: existingUser.email,
          name: existingUser.name,
          token: 'token-' + Date.now(),
        };
        
        localStorage.setItem('authToken', user.token);
        localStorage.setItem('user', JSON.stringify(user));
        
        setAuthState({
          user,
          isAuthenticated: true,
          loading: false,
        });
      } else {
        // User not found or wrong password
        setAuthState({ user: null, isAuthenticated: false, loading: false });
        throw new Error('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setAuthState({ user: null, isAuthenticated: false, loading: false });
      throw error;
    }
  };
  
  const signup = async (email: string, password: string, name: string) => {
    setAuthState(prev => ({ ...prev, loading: true }));
    
    try {
      // Get existing users from localStorage
      const usersStr = localStorage.getItem('registeredUsers');
      const users = usersStr ? JSON.parse(usersStr) : [];
      
      // Check if user already exists
      const existingUser = users.find((u: any) => u.email === email);
      if (existingUser) {
        setAuthState({ user: null, isAuthenticated: false, loading: false });
        throw new Error('User with this email already exists');
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // In production, this should be hashed
        name,
      };
      
      // Save to registered users
      users.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(users));
      
      // Log the user in
      const user: User = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        token: 'token-' + Date.now(),
      };
      
      localStorage.setItem('authToken', user.token);
      localStorage.setItem('user', JSON.stringify(user));
      
      setAuthState({
        user,
        isAuthenticated: true,
        loading: false,
      });
    } catch (error) {
      console.error('Signup error:', error);
      setAuthState({ user: null, isAuthenticated: false, loading: false });
      throw error;
    }
  };
  
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      loading: false,
    });
  };
  
  return (
    <AuthContext.Provider value={{ ...authState, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
