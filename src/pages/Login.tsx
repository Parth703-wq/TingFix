
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { Wrench, Eye, EyeOff, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const success = await login(email, password);
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome back to Ting Fix!",
      });
      navigate(from, { replace: true });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try demo credentials.",
        variant: "destructive",
      });
    }
  };

  const setDemoCredentials = () => {
    setEmail('demo.user@tingfix.com');
    setPassword('user123');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary-600">Ting Fix</span>
          </div>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="space-y-3">
            <div className="text-center text-sm text-gray-500">Demo Credentials</div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={setDemoCredentials}
              className="w-full text-left justify-start"
            >
              <User className="w-4 h-4 mr-2" />
              <div>
                <div className="font-medium">Customer Demo</div>
                <div className="text-xs text-gray-500">demo.user@tingfix.com / user123</div>
              </div>
            </Button>
          </div>

          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary-600 hover:underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
