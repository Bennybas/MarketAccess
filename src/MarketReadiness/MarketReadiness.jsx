import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  PieChart, 
  Pie, 
  Cell,
  ResponsiveContainer 
} from 'recharts';
import { 
  Stethoscope, 
  Hospital, 
  DollarSign, 
  FileText, 
  BarChart2,
  Shield,
  Users
} from 'lucide-react';

// Market Access Intelligence Data
const policyAccessData = [
  { 
    payer: 'Medicare', 
    coverageRate: 85, 
    reimbursementLevel: 'High',
    approvalComplexity: 3,
    keyBarriers: ['Prior Authorization', 'Step Therapy']
  },
  { 
    payer: 'Private Insurers', 
    coverageRate: 72, 
    reimbursementLevel: 'Medium',
    approvalComplexity: 4,
    keyBarriers: ['Formulary Restrictions', 'Documentation Requirements']
  },
  { 
    payer: 'Medicaid', 
    coverageRate: 60, 
    reimbursementLevel: 'Low',
    approvalComplexity: 5,
    keyBarriers: ['Budget Constraints', 'Strict Clinical Criteria']
  }
];

const reimbursementLandscapeData = [
  { category: 'Direct Costs', value: 45 },
  { category: 'Indirect Costs', value: 25 },
  { category: 'Patient Out-of-Pocket', value: 15 },
  { category: 'Administrative Overhead', value: 15 }
];

const clinicalAccessData = [
  {
    tier: 'Tier 1 (Preferred)',
    characteristics: [
      'Low side effect profile',
      'Proven clinical efficacy',
      'Cost-effective',
      'Recommended by key opinion leaders'
    ],
    accessScore: 90
  },
  {
    tier: 'Tier 2 (Conditional)',
    characteristics: [
      'Moderate clinical evidence',
      'Higher cost',
      'Limited first-line recommendation',
      'Requires specific patient criteria'
    ],
    accessScore: 65
  },
  {
    tier: 'Tier 3 (Limited)',
    characteristics: [
      'Emerging technology',
      'High cost',
      'Limited clinical data',
      'Requires extensive justification'
    ],
    accessScore: 40
  }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ProstateCancerMarketAccess = () => {
  const [selectedView, setSelectedView] = useState('overview');

  const PayerCoverageAnalysis = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Shield className="mr-3 text-blue-600" size={24} />
        <h3 className="text-xl font-semibold text-gray-800">Payer Coverage Landscape</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={policyAccessData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="payer" />
          <YAxis label={{ value: 'Coverage Rate (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip 
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-4 border rounded-lg shadow-xl">
                    <p className="font-bold text-gray-800">{data.payer}</p>
                    <p>Coverage Rate: {data.coverageRate}%</p>
                    <p>Reimbursement: {data.reimbursementLevel}</p>
                    <p>Key Barriers:</p>
                    <ul className="list-disc pl-5">
                      {data.keyBarriers.map((barrier, index) => (
                        <li key={index} className="text-sm">{barrier}</li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="coverageRate" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const ReimbursementBreakdown = () => (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <DollarSign className="mr-3 text-green-600" size={24} />
        <h3 className="text-xl font-semibold text-gray-800">Reimbursement Cost Landscape</h3>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={reimbursementLandscapeData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {reimbursementLandscapeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const ClinicalAccessTiers = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 col-span-2">
      <div className="flex items-center mb-4">
        <Hospital className="mr-3 text-purple-600" size={24} />
        <h3 className="text-xl font-semibold text-gray-800">Clinical Access Stratification</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {clinicalAccessData.map((tier, index) => (
          <div 
            key={index} 
            className={`border rounded-lg p-4 transition-all 
              ${tier.accessScore >= 80 ? 'bg-green-50 border-green-200' : 
                tier.accessScore >= 60 ? 'bg-yellow-50 border-yellow-200' : 
                'bg-red-50 border-red-200'}`}
          >
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-semibold text-gray-700">{tier.tier}</h4>
              <span className="text-sm font-bold text-gray-600">
                Access Score: {tier.accessScore}
              </span>
            </div>
            <ul className="space-y-2 text-sm text-gray-600 list-disc pl-5">
              {tier.characteristics.map((char, charIndex) => (
                <li key={charIndex}>{char}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <Stethoscope className="mr-4 text-blue-600" size={36} />
            <h1 className="text-3xl font-bold text-gray-800">Prostate Cancer Market Access Intelligence</h1>
          </div>
          <div className="flex space-x-2">
            <button 
              className={`px-4 py-2 rounded-full transition-all ${
                selectedView === 'overview' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedView('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-all ${
                selectedView === 'details' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedView('details')}
            >
              Detailed Insights
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <PayerCoverageAnalysis />
          <ReimbursementBreakdown />
          <ClinicalAccessTiers />
        </div>
      </div>
    </div>
  );
};

export default ProstateCancerMarketAccess;