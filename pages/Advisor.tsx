import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { InvestmentFormData } from '../types';
import { submitInvestmentForm } from '../services/n8nService';

const Advisor: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<InvestmentFormData>({
    fullName: '',
    email: '',
    age: 25,
    amount: 1000,
    currency: 'USD',
    riskAppetite: 'Medium',
    timeline: '5 Years',
    goal: 'Wealth Growth',
    hasInvestedBefore: 'No',
    industryPreference: 'Tech',
    detailedReport: true, // Default to true as toggle is hidden
  });

  const currencies = [
    { code: 'USD', symbol: '$' },
    { code: 'EUR', symbol: '€' },
    { code: 'GBP', symbol: '£' },
    { code: 'JPY', symbol: '¥' },
    { code: 'INR', symbol: '₹' },
    { code: 'AUD', symbol: 'A$' },
    { code: 'CAD', symbol: 'C$' },
    { code: 'CNY', symbol: '¥' },
    { code: 'CHF', symbol: 'Fr' },
    { code: 'HKD', symbol: 'HK$' },
    { code: 'SGD', symbol: 'S$' },
    { code: 'KRW', symbol: '₩' },
    { code: 'BRL', symbol: 'R$' },
    { code: 'MXN', symbol: '$' },
    { code: 'ZAR', symbol: 'R' },
    { code: 'AED', symbol: 'د.إ' },
    { code: 'SAR', symbol: '﷼' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Clear old results
    localStorage.removeItem('ai_results');

    try {
      const res = await submitInvestmentForm(formData);
      
      if (res.status === 'success') {
        localStorage.setItem('user_email', formData.email);
        
        // Critical: If n8n returned the AI analysis, save it now.
        // This requires removing the 'OTP Sent Response' node in n8n so the flow finishes AI before responding.
        if (res.data) {
          localStorage.setItem('ai_results', JSON.stringify(res.data));
        }
        
        navigate('/otp');
      } else {
        alert(res.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Network error. Check console for details.');
    } finally {
      setLoading(false);
    }
  };

  // Shared styles for inputs to ensure they are light colored and support dark mode
  const inputClassName = "w-full p-3 bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-slate-900 dark:text-white focus:ring-2 focus:ring-navy-900 dark:focus:ring-emerald-500 outline-none transition-colors";

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-navy-900 dark:text-white">AI Investment Advisor</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Provide your details for a personalized financial roadmap.</p>
        </div>

        <Card className="relative overflow-hidden">
          {/* Decorative Top Border */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-navy-900 to-emerald-500 dark:from-emerald-600 dark:to-emerald-400"></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Personal Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                <input 
                  type="text" name="fullName" required 
                  className={inputClassName}
                  value={formData.fullName} onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input 
                  type="email" name="email" required 
                  className={inputClassName}
                  value={formData.email} onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Age</label>
                <input 
                  type="number" name="age" min="18" max="100" required
                  className={inputClassName}
                  value={formData.age} onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Investment Amount</label>
                <div className="flex">
                  <select
                    name="currency"
                    className="p-3 bg-slate-100 dark:bg-slate-600 border border-slate-200 dark:border-slate-600 rounded-l-lg text-slate-700 dark:text-white focus:ring-2 focus:ring-navy-900 dark:focus:ring-emerald-500 outline-none border-r-0 font-medium transition-colors"
                    value={formData.currency}
                    onChange={handleChange}
                  >
                    {currencies.map(c => (
                      <option key={c.code} value={c.code}>{c.code} ({c.symbol})</option>
                    ))}
                  </select>
                  <input 
                    type="number" name="amount" min="100" required
                    className={`${inputClassName} rounded-l-none`}
                    value={formData.amount} onChange={handleChange}
                    placeholder="1000"
                  />
                </div>
              </div>
            </div>

            <hr className="border-slate-100 dark:border-slate-700" />

            {/* Investment Preferences */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Risk Appetite</label>
                <select 
                  name="riskAppetite" 
                  className={inputClassName}
                  value={formData.riskAppetite} onChange={handleChange}
                >
                  <option>Very Low</option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Very High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Timeline</label>
                <select 
                  name="timeline" 
                  className={inputClassName}
                  value={formData.timeline} onChange={handleChange}
                >
                  <option>1 Year</option>
                  <option>3 Years</option>
                  <option>5 Years</option>
                  <option>10+ Years</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Primary Goal</label>
                <select 
                  name="goal" 
                  className={inputClassName}
                  value={formData.goal} onChange={handleChange}
                >
                  <option>Wealth Growth</option>
                  <option>Passive Income</option>
                  <option>Retirement</option>
                  <option>Quick Profit</option>
                  <option>Education Fund</option>
                </select>
              </div>
              <div>
                 <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Preferred Industry</label>
                <select 
                  name="industryPreference" 
                  className={inputClassName}
                  value={formData.industryPreference} onChange={handleChange}
                >
                  <option>Tech</option>
                  <option>Pharma / Healthcare</option>
                  <option>Energy / Green Tech</option>
                  <option>Real Estate</option>
                  <option>Crypto / Blockchain</option>
                  <option>No Preference</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg transition-colors">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Have you invested before?</span>
              <div className="flex items-center space-x-4 text-slate-900 dark:text-white">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" name="hasInvestedBefore" value="Yes" 
                    checked={formData.hasInvestedBefore === 'Yes'}
                    onChange={handleChange}
                    className="text-navy-900 focus:ring-navy-900 dark:text-emerald-500 dark:focus:ring-emerald-500"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" name="hasInvestedBefore" value="No" 
                    checked={formData.hasInvestedBefore === 'No'}
                    onChange={handleChange}
                    className="text-navy-900 focus:ring-navy-900 dark:text-emerald-500 dark:focus:ring-emerald-500"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <Button type="submit" fullWidth isLoading={loading} className="mt-4">
              {loading ? 'Analyzing & Sending OTP (Approx. 15s)...' : 'Analyze with AI'}
            </Button>
            
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4">
              <span className="inline-block mr-1">🔒</span> 
              Your data is encrypted and sent securely to our analysis engine.
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Advisor;