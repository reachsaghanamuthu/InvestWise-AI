import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { verifyOTP } from '../services/n8nService';

const OTP: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [timer, setTimer] = useState(300); // 5 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== "") {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const code = otp.join('');
    if (code.length !== 6) {
      setError('Please enter all 6 digits.');
      return;
    }

    setLoading(true);
    try {
      // 1. Verify OTP with Backend (This now triggers AI Analysis in n8n)
      const response = await verifyOTP(code);
      
      if (response.status === 'success') {
        // 2. If backend returned new analysis data, save it
        if (response.data) {
          localStorage.setItem('ai_results', JSON.stringify(response.data));
          navigate('/dashboard');
        } else {
           // Fallback: Check if we have data from previous step or allow generic dashboard
           const storedResults = localStorage.getItem('ai_results');
           if (storedResults) {
              navigate('/dashboard');
           } else {
              // Should not happen with new n8nService logic, but just in case
              // We can create a basic default set to allow user to proceed
              setError('Verification success, but analysis data was empty. Try resubmitting.');
           }
        }
      } else {
        setError(response.message || 'Invalid OTP. Try again.');
      }
    } catch (err) {
      setError('Verification failed. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col justify-center items-center p-4 transition-colors duration-300">
      <Card className="w-full max-w-md text-center p-8">
        <div className="mb-6 flex justify-center">
          <div className="bg-emerald-100 dark:bg-emerald-900/30 p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Verify Identity</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
          Enter the 6-digit code sent to your email. <br/>
          <span className="text-xs text-slate-400 dark:text-slate-500">(Check spam folder if not received)</span>
        </p>

        <form onSubmit={handleVerify}>
          <div className="flex justify-center space-x-2 mb-8">
            {otp.map((data, index) => (
              <input
                className="w-10 h-12 sm:w-12 sm:h-14 bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg text-center text-xl font-bold text-slate-900 dark:text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:focus:ring-emerald-900 outline-none transition-all"
                type="text"
                name="otp"
                maxLength={1}
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>

          {error && <p className="text-red-500 dark:text-red-400 text-sm mb-4 font-medium">{error}</p>}

          <Button type="submit" fullWidth isLoading={loading}>
            {loading ? 'Verifying & Analyzing...' : 'Verify & View Strategy'}
          </Button>

          <div className="mt-6 flex justify-between text-sm text-slate-500 dark:text-slate-400">
             <span>Time remaining: {formatTime(timer)}</span>
             <button type="button" className="text-navy-900 dark:text-white font-semibold hover:underline" onClick={() => navigate('/advisor')}>Resubmit Form</button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default OTP;