import React, { useState } from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  ComposedChart
} from 'recharts';
import { 
  Filter, 
  Search, 
  Info 
} from 'lucide-react';

// Payer Coverage Data
const coverageTypeData = [
  { name: 'Commercial', value: 45, color: '#3B82F6' },
  { name: 'Medicare', value: 35, color: '#10B981' },
  { name: 'Medicaid', value: 20, color: '#F43F5E' }
];

const drugTierData = [
  { 
    payer: 'Aetna', 
    region: 'National', 
    tier1: 40, 
    tier2: 35, 
    tier3: 25 
  },
  { 
    payer: 'Blue Cross', 
    region: 'Northeast', 
    tier1: 50, 
    tier2: 30, 
    tier3: 20 
  },
  { 
    payer: 'Cigna', 
    region: 'West', 
    tier1: 35, 
    tier2: 40, 
    tier3: 25 
  }
];

const priorAuthorizationData = [
  { payer: 'Aetna', priorAuth: 65, stepTherapy: 30 },
  { payer: 'Blue Cross', priorAuth: 55, stepTherapy: 40 },
  { payer: 'Cigna', priorAuth: 70, stepTherapy: 35 }
];

const costComparisonData = [
  { 
    competitor: 'Competitor A', 
    grossPrice: 1200, 
    netPrice: 950 
  },
  { 
    competitor: 'Competitor B', 
    grossPrice: 1500, 
    netPrice: 1100 
  },
  { 
    competitor: 'Our Drug', 
    grossPrice: 1300, 
    netPrice: 1000 
  }
];

const reimbursementData = [
  { month: 'Jan', approvedClaims: 40, Medicare: 45, Commercial: 35, Medicaid: 25 },
  { month: 'Feb', approvedClaims: 55, Medicare: 60, Commercial: 50, Medicaid: 40 },
  { month: 'Mar', approvedClaims: 65, Medicare: 70, Commercial: 60, Medicaid: 50 },
  { month: 'Apr', approvedClaims: 75, Medicare: 80, Commercial: 70, Medicaid: 60 }
];

const payerPlanDetails = [
  { 
    payer: 'Aetna', 
    monthlyPremium: 450, 
    annualDeductible: 1500, 
    maxOutOfPocket: 8550 
  },
  { 
    payer: 'Blue Cross', 
    monthlyPremium: 500, 
    annualDeductible: 1750, 
    maxOutOfPocket: 9000 
  },
  { 
    payer: 'Cigna', 
    monthlyPremium: 425, 
    annualDeductible: 1400, 
    maxOutOfPocket: 8250 
  }
];

const PayerFinancialDashboard = () => {
  const [selectedPayerType, setSelectedPayerType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const CoverageTypePieChart = () => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Coverage Types</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={coverageTypeData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {coverageTypeData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            content={({ payload }) => {
              if (payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-white p-3 border rounded shadow-lg">
                    <p className="font-bold">{data.name}</p>
                    <p>{data.value}% Coverage</p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );

  const DrugTierTable = () => {
    const filteredData = drugTierData.filter(item => 
      item.payer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Drug Tier Placement</h3>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search payers..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-2 border rounded text-sm w-full"
            />
            <Search 
              className="absolute left-2 top-3 text-gray-400" 
              size={18} 
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left">Payer</th>
                <th className="p-2">Region</th>
                <th className="p-2">Tier 1</th>
                <th className="p-2">Tier 2</th>
                <th className="p-2">Tier 3</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.payer} className="border-b hover:bg-gray-50">
                  <td className="p-2 font-medium">{item.payer}</td>
                  <td className="p-2 text-center">{item.region}</td>
                  <td className="p-2 text-center">{item.tier1}%</td>
                  <td className="p-2 text-center">{item.tier2}%</td>
                  <td className="p-2 text-center">{item.tier3}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const PriorAuthorizationChart = () => (
    <div className="bg-white rounded-lg shadow-md p-4 col-span-2">
      <h3 className="text-lg font-semibold mb-4">Prior Authorization & Step Therapy</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={priorAuthorizationData}>
          <XAxis dataKey="payer" />
          <YAxis label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="priorAuth" stackId="a" fill="#3B82F6" name="Prior Authorization" />
          <Bar dataKey="stepTherapy" stackId="a" fill="#10B981" name="Step Therapy" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  const CostComparisonChart = () => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Drug Cost Comparison</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={costComparisonData}>
          <XAxis dataKey="competitor" />
          <YAxis label={{ value: 'Price ($)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="grossPrice" fill="#F43F5E" name="Gross Price" />
          <Bar dataKey="netPrice" fill="#3B82F6" name="Net Price" />
        </BarChart>
      </ResponsiveContainer>
      <p className="text-sm text-gray-600 text-center mt-2">
        Net pricing aligns with market expectations
      </p>
    </div>
  );

  const ReimbursementAccessChart = () => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Reimbursement Access</h3>
        <select 
          className="border rounded px-2 py-1 text-sm"
          value={selectedPayerType}
          onChange={(e) => setSelectedPayerType(e.target.value)}
        >
          <option value="All">All Payers</option>
          <option value="Medicare">Medicare</option>
          <option value="Commercial">Commercial</option>
          <option value="Medicaid">Medicaid</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={reimbursementData}>
          <XAxis dataKey="month" />
          <YAxis label={{ value: 'Approved Claims (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Line 
            type="monotone" 
            dataKey="approvedClaims" 
            stroke="#8884d8" 
            name="Total Approved Claims" 
          />
          {selectedPayerType !== 'All' && (
            <Line 
              type="monotone" 
              dataKey={selectedPayerType} 
              stroke="#82ca9d" 
              name={`${selectedPayerType} Claims`} 
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );

  const PayerPlanDetailsTable = () => (
    <div className="bg-white rounded-lg shadow-md p-4 col-span-2">
      <h3 className="text-lg font-semibold mb-4">Payer Plan Details</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Payer</th>
              <th className="p-2">Monthly Premium</th>
              <th className="p-2">Annual Deductible</th>
              <th className="p-2">Max Out-of-Pocket</th>
            </tr>
          </thead>
          <tbody>
            {payerPlanDetails.map((plan) => (
              <tr key={plan.payer} className="border-b hover:bg-gray-50">
                <td className="p-2 font-medium">{plan.payer}</td>
                <td className="p-2 text-center">${plan.monthlyPremium}</td>
                <td className="p-2 text-center">${plan.annualDeductible}</td>
                <td className="p-2 text-center">${plan.maxOutOfPocket}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Payer Coverage & Financial Viability</h1>
          <div className="flex items-center space-x-2 text-gray-600">
            <Info size={20} />
            <span className="text-sm">Comprehensive Payer Insights</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <CoverageTypePieChart />
          <DrugTierTable />
          <PriorAuthorizationChart />
          <CostComparisonChart />
          <ReimbursementAccessChart />
          <PayerPlanDetailsTable />
        </div>
      </div>
    </div>
  );
};

export default PayerFinancialDashboard;