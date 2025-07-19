import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('tingfix_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email, password) => {
    setIsLoading(true);
    
    // Demo credentials validation
    if (email === 'demo.user@tingfix.com' && password === 'user123') {
      const userData = {
        id: '1',
        name: 'Demo User',
        email: 'demo.user@tingfix.com',
        phone: '+91 98765 00001',
        type: 'user'
      };
      setUser(userData);
      localStorage.setItem('tingfix_user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    if (email === 'demo.pro@tingfix.com' && password === 'pro123') {
      const userData = {
        id: '2',
        name: 'Demo Professional',
        email: 'demo.pro@tingfix.com',
        phone: '+91 98765 00002',
        type: 'professional',
        profession: 'Multi-Service Expert'
      };
      setUser(userData);
      localStorage.setItem('tingfix_user', JSON.stringify(userData));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('tingfix_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};