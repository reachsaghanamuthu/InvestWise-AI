import React, { useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { sendLoginOTP } from '../services/n8nService';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate backend call
    try {
      await sendLoginOTP(email);
      alert('OTP sent to email (Demo Mode)');
    } catch (e) {
      alert('Error');
    } finally {
      setLoading(false);
    }
  };

  const inputClassName = "w-full p-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-navy-900 dark:focus:ring-emerald-500 transition-colors";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center p-4 transition-colors duration-300">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-navy-900 dark:text-white">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Secure access to your portfolio</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
            <input 
              type="email" required 
              className={inputClassName}
              value={email} onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Password</label>
            <input 
              type="password" required 
              className={inputClassName}
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button fullWidth isLoading={loading} className="mt-6">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
          >
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
          </button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-center items-center space-x-2 text-xs text-slate-400 dark:text-slate-500">
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
           <span>256-bit Secure Encryption</span>
        </div>
      </Card>
    </div>
  );
};

export default Auth;