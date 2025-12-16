import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/ui/Button';

// Helper Components
const InfoCard = ({ icon, title, children, className = "" }: { icon: React.ReactNode; title: string; children?: React.ReactNode; className?: string }) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 ${className}`}>
    <div className="shrink-0">
      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-xl text-navy-900">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-lg font-bold text-navy-900 mb-2">{title}</h3>
      <div className="text-slate-600 text-sm leading-relaxed">{children}</div>
    </div>
  </div>
);

const TypeCard = ({ icon, title, desc, risk, potential, liquidity }: any) => {
  const getBadgeStyle = (label: string, val: string) => {
    if (label === 'Risk') {
      if (val.includes('Very High')) return 'bg-red-100 text-red-700 border-red-200';
      if (val.includes('High')) return 'bg-orange-100 text-orange-700 border-orange-200';
      if (val.includes('Medium')) return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      if (val.includes('Low')) return 'bg-green-50 text-green-700 border-green-200';
      return 'bg-slate-50 text-slate-600 border-slate-200';
    }
    return 'bg-slate-50 text-slate-600 border-slate-200';
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex gap-4 mb-3">
        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy-900">{title}</h3>
          <p className="text-slate-600 text-sm mt-1">{desc}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {[
          { l: 'Risk', v: risk },
          { l: 'Potential', v: potential },
          { l: 'Liquidity', v: liquidity }
        ].map((item, i) => (
          <span key={i} className={`text-xs px-2 py-1 rounded border font-medium ${getBadgeStyle(item.l, item.v)}`}>
            <span className="opacity-60 mr-1">{item.l}:</span>{item.v}
          </span>
        ))}
      </div>
    </div>
  );
};

const TrendCard = ({ icon, title, desc, growth }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative overflow-hidden">
    <div className="flex justify-between items-start mb-2">
      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-xl text-navy-900">
        {icon}
      </div>
      <div className="flex items-center text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-bold">
        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        {growth}
      </div>
    </div>
    <h3 className="text-lg font-bold text-navy-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

const RiskProfileCard = ({ title, type, desc, allocation, bestFor, returns, volatility, icon, color }: any) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${color === 'blue' ? 'bg-blue-50 text-blue-600' : color === 'yellow' ? 'bg-yellow-50 text-yellow-600' : 'bg-red-50 text-red-600'}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-bold text-navy-900 flex items-center gap-2">
            {title}
            <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wide border ${color === 'blue' ? 'bg-blue-50 text-blue-600 border-blue-100' : color === 'yellow' ? 'bg-yellow-50 text-yellow-600 border-yellow-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
              {type}
            </span>
          </h3>
        </div>
      </div>
      <p className="text-slate-600 text-sm mb-6">{desc}</p>
      
      <div className="space-y-3 mb-6">
        <p className="text-xs font-semibold text-slate-400 uppercase">Suggested Allocation</p>
        {allocation.map((a: any, i: number) => (
          <div key={i} className="flex items-center text-sm">
            <div className="w-12 font-bold text-navy-900">{a.pct}</div>
            <div className="flex-1 h-2 bg-slate-100 rounded-full mx-3 overflow-hidden">
              <div className="h-full bg-navy-900 rounded-full" style={{ width: a.pct }}></div>
            </div>
            <div className="text-slate-500 text-xs w-32 text-right">{a.name}</div>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-lg p-4 grid grid-cols-2 gap-4">
        <div>
           <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Best For</p>
           <ul className="space-y-1">
             {bestFor.map((item: string, i: number) => (
               <li key={i} className="flex items-start text-xs text-slate-600">
                 <svg className="w-3 h-3 text-emerald-500 mr-1.5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 {item}
               </li>
             ))}
           </ul>
        </div>
        <div className="space-y-3">
          <div>
             <p className="text-xs font-semibold text-slate-400 uppercase">Expected Return</p>
             <p className="text-sm font-bold text-navy-900">{returns}</p>
          </div>
          <div>
             <p className="text-xs font-semibold text-slate-400 uppercase">Volatility</p>
             <p className="text-sm font-bold text-navy-900">{volatility}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Content Data
const contentMap: any = {
  basics: {
    title: 'Investment Basics',
    subtitle: 'Essential knowledge for first-time investors. Learn the fundamentals before you start your investment journey.',
    content: (
      <div className="space-y-8">
        <div className="space-y-4">
          <InfoCard icon="👛" title="What is Investing?">
            Investing means putting your money to work by purchasing assets that have the potential to grow in value over time. Unlike saving, which preserves your money, investing aims to increase it.
          </InfoCard>
          <InfoCard icon="🎯" title="Risk vs. Reward">
            All investments carry some risk. Generally, higher potential returns come with higher risk. Understanding your risk tolerance is crucial for building a portfolio that matches your comfort level.
          </InfoCard>
          <InfoCard icon="📈" title="Compound Growth">
            When your investments earn returns, those returns can also earn returns. This 'compounding' effect can significantly grow your wealth over time, especially if you start early.
          </InfoCard>
          <InfoCard icon="🐷" title="Diversification">
            Don't put all your eggs in one basket. Spreading investments across different asset types, industries, and regions can help reduce risk and smooth out returns.
          </InfoCard>
          <InfoCard icon="🕒" title="Time Horizon">
            Your investment timeline matters. Longer time horizons typically allow for more aggressive investing since you have more time to recover from market downturns.
          </InfoCard>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-xl font-bold text-navy-900 mb-6">Tips for Beginner Investors</h3>
          <ul className="space-y-4">
            {[
              "Start with an emergency fund (3-6 months of expenses) before investing",
              "Pay off high-interest debt before investing aggressively",
              "Consider tax-advantaged accounts like 401(k)s and IRAs first",
              "Keep investment fees low - they compound over time too",
              "Stay consistent with regular contributions",
              "Don't try to time the market - time in the market beats timing the market"
            ].map((tip, i) => (
              <li key={i} className="flex items-start">
                <span className="flex items-center justify-center w-6 h-6 rounded bg-emerald-100 text-emerald-700 text-xs font-bold mr-3 shrink-0">
                  {i + 1}
                </span>
                <span className="text-slate-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-navy-900 mb-2">Best Investments by Risk Type</h2>
          <p className="text-slate-500 mb-6">Find the right investment strategy based on your risk tolerance and goals.</p>
          <div className="grid gap-6">
            <RiskProfileCard 
              title="Conservative" 
              type="Capital Preservation"
              color="blue"
              icon="🛡️"
              desc="Best for investors who prioritize protecting their principal over growth. Ideal for those nearing retirement or with short time horizons."
              allocation={[
                { pct: '60%', name: 'Bonds & Fixed Income' },
                { pct: '20%', name: 'Stocks' },
                { pct: '15%', name: 'Cash & Equivalents' },
                { pct: '5%', name: 'Alternative Investments' }
              ]}
              bestFor={['Retirement within 5 years', 'Emergency fund investing', 'Risk-averse investors', 'Income-focused goals']}
              returns="4-6% annually"
              volatility="Low"
            />
            <RiskProfileCard 
              title="Moderate" 
              type="Balanced Growth"
              color="yellow"
              icon="⚖️"
              desc="A balanced approach that seeks growth while managing risk. Suitable for mid-term goals and investors comfortable with some market fluctuation."
              allocation={[
                { pct: '50%', name: 'Stocks' },
                { pct: '35%', name: 'Bonds & Fixed Income' },
                { pct: '10%', name: 'Real Estate' },
                { pct: '5%', name: 'Cash & Equivalents' }
              ]}
              bestFor={['5-15 year time horizon', 'Balanced risk tolerance', 'Saving for major purchases', 'Building long-term wealth']}
              returns="6-8% annually"
              volatility="Medium"
            />
            <RiskProfileCard 
              title="Aggressive" 
              type="Maximum Growth"
              color="red"
              icon="🚀"
              desc="Prioritizes growth over stability. Best for young investors with long time horizons who can weather significant market volatility."
              allocation={[
                { pct: '75%', name: 'Stocks' },
                { pct: '15%', name: 'Real Estate & Alternatives' },
                { pct: '8%', name: 'Bonds' },
                { pct: '2%', name: 'Cash' }
              ]}
              bestFor={['20+ year time horizon', 'High risk tolerance', 'Young Investors', 'Growth-focused goals']}
              returns="8-12% annually"
              volatility="High"
            />
          </div>
        </div>
        
        <div className="text-center pt-8">
          <p className="text-slate-500 mb-4">Ready to get personalized investment advice?</p>
          <Link to="/advisor">
            <Button>Get AI Investment Analysis &rarr;</Button>
          </Link>
        </div>
      </div>
    )
  },
  types: {
    title: 'Types of Investments',
    subtitle: 'Explore different investment options and understand their risk-reward profiles.',
    content: (
      <div className="space-y-8">
        <div className="grid gap-4">
          <TypeCard 
            icon="🏢" title="Stocks" 
            desc="Ownership shares in a company. When you buy stock, you become a partial owner and can benefit from the company's growth through price appreciation and dividends."
            risk="High" potential="High" liquidity="High"
          />
          <TypeCard 
            icon="🏛️" title="Bonds" 
            desc="Loans to governments or corporations that pay regular interest. Generally considered safer than stocks but with lower potential returns."
            risk="Low-Medium" potential="Low-Medium" liquidity="Medium"
          />
          <TypeCard 
            icon="📊" title="ETFs (Exchange-Traded Funds)" 
            desc="Baskets of securities that trade like stocks. They offer diversification at lower costs than buying individual securities."
            risk="Varies" potential="Varies" liquidity="High"
          />
          <TypeCard 
            icon="🏦" title="Mutual Funds" 
            desc="Professionally managed investment pools. Multiple investors combine their money to invest in a diversified portfolio."
            risk="Varies" potential="Medium" liquidity="Medium"
          />
          <TypeCard 
            icon="🏠" title="Real Estate" 
            desc="Physical property or real estate investment trusts (REITs). Can provide rental income and appreciation over time."
            risk="Medium" potential="Medium-High" liquidity="Low"
          />
          <TypeCard 
            icon="🪙" title="Cryptocurrency" 
            desc="Digital currencies like Bitcoin and Ethereum. Highly volatile but has shown significant growth potential."
            risk="Very High" potential="Very High" liquidity="High"
          />
          <TypeCard 
            icon="🌐" title="International Investments" 
            desc="Investments in foreign markets. Can provide diversification benefits but comes with currency and political risks."
            risk="Medium-High" potential="Medium-High" liquidity="Medium"
          />
        </div>

        <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
          <h3 className="text-lg font-bold text-navy-900 mb-2">Choosing the Right Mix</h3>
          <p className="text-slate-600 text-sm">
            The best investment strategy typically involves a mix of different asset types based on your goals, risk tolerance, and time horizon. Our AI advisor can help you determine the optimal allocation for your situation.
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-slate-500 mb-4">Not sure which investments are right for you?</p>
          <Link to="/advisor">
             <Button>Get Personalized Recommendations &rarr;</Button>
          </Link>
        </div>
      </div>
    )
  },
  trending: {
    title: 'Trending Investments Today',
    subtitle: 'Explore sectors and investment themes that are currently seeing significant interest and growth.',
    content: (
      <div className="space-y-8">
        <div className="grid gap-4">
          <TrendCard 
            icon="🤖" title="Artificial Intelligence" growth="+42% YTD"
            desc="AI and machine learning companies are seeing massive growth as businesses adopt automation and intelligent systems. Major players include semiconductor makers, cloud providers, and AI software companies."
          />
          <TrendCard 
            icon="🍃" title="Clean Energy" growth="+28% YTD"
            desc="Solar, wind, and electric vehicle companies are benefiting from global sustainability initiatives and government incentives. This sector includes manufacturers, utilities, and infrastructure companies."
          />
          <TrendCard 
            icon="🔌" title="Semiconductors" growth="+35% YTD"
            desc="Chip makers are essential for everything from smartphones to data centers. The global chip shortage has highlighted the importance of this sector, driving investment and expansion."
          />
          <TrendCard 
            icon="🧬" title="Healthcare Innovation" growth="+18% YTD"
            desc="Biotech, telemedicine, and healthcare technology companies are transforming patient care. This includes gene therapy, digital health platforms, and medical devices."
          />
          <TrendCard 
            icon="🚀" title="Space & Aerospace" growth="+22% YTD"
            desc="Private space companies and defense contractors are expanding rapidly. This sector includes satellite services, launch providers, and aerospace manufacturers."
          />
          <TrendCard 
            icon="🌏" title="Emerging Markets" growth="+8% YTD"
            desc="Developing economies in Asia, Africa, and South America offer growth opportunities as their middle classes expand and infrastructure improves."
          />
        </div>

        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
          <h3 className="text-sm font-bold text-orange-800 mb-2">Important Disclaimer</h3>
          <p className="text-orange-700 text-xs leading-relaxed">
            Past performance is not indicative of future results. The trends shown are for educational purposes only and should not be considered investment advice. All investments carry risk.
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-slate-500 mb-4">Want to know which trends match your investment profile?</p>
          <Link to="/advisor">
             <Button>Get Personalized Recommendations &rarr;</Button>
          </Link>
        </div>
      </div>
    )
  },
  guide: {
    title: 'How Stock Markets Work',
    subtitle: 'Understand the mechanics behind stock markets and how they function.',
    content: (
      <div className="space-y-8">
        <div className="space-y-4">
          <InfoCard icon="📉" title="What is a Stock Market?">
            A stock market is a platform where buyers and sellers trade shares of publicly listed companies. Major exchanges include the NYSE, NASDAQ, and international markets like LSE and TSE.
          </InfoCard>
          <InfoCard icon="🕒" title="Market Hours">
            US markets typically operate 9:30 AM to 4:00 PM Eastern Time, Monday through Friday. Pre-market and after-hours trading is also available with some brokers.
          </InfoCard>
          <InfoCard icon="👥" title="Market Participants">
            Markets include retail investors (individuals), institutional investors (funds, banks), market makers who provide liquidity, and regulators who ensure fair trading.
          </InfoCard>
          <InfoCard icon="⚖️" title="Price Discovery">
            Stock prices are determined by supply and demand. When more people want to buy than sell, prices go up. When more want to sell, prices go down.
          </InfoCard>
          <InfoCard icon="📊" title="Market Indices">
            Indices like the S&P 500, Dow Jones, and NASDAQ Composite track groups of stocks to represent overall market performance. They're useful benchmarks for portfolio comparison.
          </InfoCard>
          <InfoCard icon="🔔" title="Market News & Events">
            Economic reports, company earnings, geopolitical events, and central bank decisions can all impact market movements. Staying informed helps you understand market behavior.
          </InfoCard>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-navy-900 mb-6">Key Market Terms</h3>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              { t: 'Bull Market', d: 'A market condition where prices are rising or expected to rise' },
              { t: 'Bear Market', d: 'A market condition where prices are falling or expected to fall (typically 20% or more decline)' },
              { t: 'Volume', d: 'The number of shares traded during a specific period' },
              { t: 'Market Cap', d: "The total value of a company's shares (share price × number of shares)" },
              { t: 'Dividend', d: 'A portion of company profits paid to shareholders' },
              { t: 'IPO', d: 'Initial Public Offering - when a company first sells shares to the public' },
              { t: 'Volatility', d: "The degree of variation in a stock's price over time" },
              { t: 'Liquidity', d: 'How easily an asset can be bought or sold without affecting its price' }
            ].map((term, i) => (
              <div key={i} className="bg-slate-50 p-3 rounded-lg">
                <p className="font-bold text-navy-900 text-sm">{term.t}</p>
                <p className="text-slate-600 text-xs mt-1">{term.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <p className="text-slate-500 mb-4">Ready to put your knowledge into action?</p>
          <Link to="/advisor">
             <Button>Get AI Investment Analysis &rarr;</Button>
          </Link>
        </div>
      </div>
    )
  }
};

const Education: React.FC = () => {
  const { topic } = useParams();
  const data = contentMap[topic || 'basics'];

  if (!data) return <div className="p-10 text-center">Topic not found</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-slate-500 hover:text-navy-900 text-sm font-medium mb-6 inline-flex items-center">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Home
        </Link>
        
        <div className="mb-8">
          <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-xl text-slate-600 mb-4">
            {topic === 'basics' && '📖'}
            {topic === 'types' && '🏷️'}
            {topic === 'trending' && '🔥'}
            {topic === 'guide' && '📈'}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">{data.title}</h1>
          <p className="text-slate-600 text-lg">{data.subtitle}</p>
        </div>

        {data.content}
      </div>
    </div>
  );
};

export default Education;