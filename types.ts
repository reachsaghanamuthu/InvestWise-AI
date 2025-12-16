export interface InvestmentFormData {
  fullName: string;
  email: string;
  age: number;
  amount: number;
  currency: string;
  riskAppetite: 'Very Low' | 'Low' | 'Medium' | 'High' | 'Very High';
  timeline: '1 Year' | '3 Years' | '5 Years' | '10+ Years';
  goal: string;
  hasInvestedBefore: 'Yes' | 'No';
  industryPreference: string;
  detailedReport: boolean;
}

export interface RecommendationResult {
  instruments: Array<{ name: string; type: string; allocation: string }>;
  riskClassification: string;
  explanation: string;
  trendingAssets: string[];
  strategy: string;
  risksAndOpportunities: string;
  pdfUrl?: string;
}

export interface APIResponse<T> {
  status: 'success' | 'failed';
  message: string;
  data?: T;
}

export enum InvestmentPageType {
  BASICS = 'basics',
  TYPES = 'types',
  TRENDING = 'trending',
  GUIDE = 'guide'
}