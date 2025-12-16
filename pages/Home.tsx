import React from 'react';
import { Link } from 'react-router-dom';
import VideoTutorial from '../components/VideoTutorial';
import Button from '../components/ui/Button';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text */}
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wide mb-6 border border-emerald-100 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                AI-Powered Investment Advisory
              </span>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-navy-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                Smart Investing, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-emerald-600 dark:from-white dark:to-emerald-400">Simplified.</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Get personalized investment recommendations powered by advanced AI. Make informed decisions with confidence and grow your wealth strategically.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link to="/advisor">
                  <Button className="w-full sm:w-auto px-8 py-4 text-base shadow-xl shadow-navy-900/10 dark:shadow-none">
                    Get Free Analysis &rarr;
                  </Button>
                </Link>
                <Link to="/education/basics">
                  <Button variant="outline" className="w-full sm:w-auto px-8 py-4 text-base dark:border-slate-500 dark:text-white dark:hover:bg-slate-800">
                    Learn About Investing
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400 font-medium">
                <span className="flex items-center"><svg className="w-4 h-4 text-emerald-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> Free to use</span>
                <span className="flex items-center"><svg className="w-4 h-4 text-emerald-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> No credit card</span>
                <span className="flex items-center"><svg className="w-4 h-4 text-emerald-500 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg> Instant results</span>
              </div>
            </div>

            {/* Right Column: Video */}
            <div className="relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100 to-navy-50 dark:from-emerald-900/20 dark:to-navy-900/50 rounded-[2rem] transform rotate-2 opacity-50 blur-lg"></div>
               <div className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-2 border border-slate-100 dark:border-slate-700">
                  <div className="bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden aspect-video relative flex flex-col items-center justify-center text-center">

                     {/* UPDATED — YOUTUBE VIDEO WITH THUMBNAIL */}
                     <VideoTutorial
                       type="youtube"
                       src="https://www.youtube.com/watch?v=cxW4s23qC9o"
                       thumbnail="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                     />

                     <div className="absolute bottom-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-3 text-left border-t border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <div>
                          <p className="text-xs font-bold text-navy-900 dark:text-white">How InvestWise AI Works</p>
                          <p className="text-[10px] text-slate-500 dark:text-slate-400">Watch our tutorial to learn how to get personalized investment advice</p>
                        </div>
                        <div className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 flex items-center">
                          <svg className="w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                          YouTube Tutorial
                        </div>
                     </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-slate-50 dark:bg-slate-800/50 py-24 border-y border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white mb-4">How to Use This AI Investment Advisor</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Get your personalized investment analysis in just four simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-0.5 bg-slate-200 dark:bg-slate-700 -z-10"></div>

            {/* Step 1 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-navy-900 dark:bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg shadow-navy-900/20 dark:shadow-emerald-600/20 relative z-10">1</div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 text-center">Enter Your Details</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center text-sm leading-relaxed">
                Share your investment goals, risk tolerance, and financial information securely.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-navy-900 dark:bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg shadow-navy-900/20 dark:shadow-emerald-600/20 relative z-10">2</div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 text-center">Verify Your Identity</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center text-sm leading-relaxed">
                Quick email verification with a 6-digit code to ensure your data stays protected.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-navy-900 dark:bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg shadow-navy-900/20 dark:shadow-emerald-600/20 relative z-10">3</div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 text-center">Get AI Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center text-sm leading-relaxed">
                Receive personalized investment recommendations powered by advanced AI algorithms.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-700 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 bg-navy-900 dark:bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-6 mx-auto shadow-lg shadow-navy-900/20 dark:shadow-emerald-600/20 relative z-10">4</div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 text-center">Download Your Report</h3>
              <p className="text-slate-600 dark:text-slate-300 text-center text-sm leading-relaxed">
                Get a comprehensive PDF report with actionable investment strategies.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/advisor">
               <Button className="px-10 py-4 text-lg shadow-xl shadow-navy-900/20">
                 Start Your Free Analysis
               </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-900 dark:text-white mb-4">Why Choose InvestWise AI?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Trusted by thousands of investors for smart, secure, and personalized advice</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group text-center bg-white dark:bg-slate-800">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">AI-Powered Insights</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our advanced AI analyzes your profile to provide personalized investment recommendations.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group text-center bg-white dark:bg-slate-800">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Bank-Level Security</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                256-bit encryption and 2-factor authentication keep your data completely secure.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-emerald-100 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group text-center bg-white dark:bg-slate-800">
              <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3">Real-Time Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Get up-to-date market insights and portfolio recommendations instantly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;