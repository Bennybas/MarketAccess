import React, { useState } from 'react';
import { 
  FileStack, 
  BarChart2, 
  Target, 
  TrendingUp, 
  MapPin, 
  DollarSign, 
  Layers 
} from 'lucide-react';

const Competitors = ({ competitorData }) => {
  const [selectedCompetitor, setSelectedCompetitor] = useState(null);
  const [comparisonView, setComparisonView] = useState(false);

  const renderCompetitorOverview = (competitor) => (
    <div className="grid grid-cols-3 gap-4">
      {/* Metrics Cards */}
      <MetricCard 
        icon={<BarChart2 className="text-blue-500" />}
        title="Total Payers"
        value={competitor.totalPayers}
      />
      <MetricCard 
        icon={<Target className="text-green-500" />}
        title="Total Plans"
        value={competitor.totalPlans}
      />
      <MetricCard 
        icon={<Layers className="text-purple-500" />}
        title="Standard Tier"
        value={competitor.tierInfo.standardTier}
      />
      <MetricCard 
        icon={<TrendingUp className="text-orange-500" />}
        title="Avg Patient POP"
        value={`$${competitor.avgPOP}`}
      />
      <MetricCard 
        icon={<DollarSign className="text-green-600" />}
        title="Avg Unit Price"
        value={`$${competitor.avgUnitPrice}`}
      />
      <MetricCard 
        icon={<MapPin className="text-red-500" />}
        title="Covered States"
        value={`${competitor.patientAccess.coveredStates}/${competitor.patientAccess.coveredStates + competitor.patientAccess.nonCoveredStates}`}
      />
    </div>
  );

  const renderComparisonView = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-6 text-center">Competitor Comparison</h2>
      <div className="grid grid-cols-4 gap-4 items-start">
        {competitorData.map((competitor, index) => (
          <div 
            key={index} 
            className={`p-4 rounded-lg border transition-all ${
              selectedCompetitor === competitor 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => setSelectedCompetitor(competitor)}
          >
            <h3 className="font-semibold text-lg mb-4">{competitor.name}</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Payers</span>
                <span className="font-bold">{competitor.totalPayers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Avg Reimbursement</span>
                <span className="font-bold">{competitor.avgReimbursement}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Covered States</span>
                <span className="font-bold">{competitor.patientAccess.coveredStates}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCompetitor && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Detailed Comparison for {selectedCompetitor.name}</h3>
          <div className="grid grid-cols-3 gap-4">
            {renderCompetitorOverview(selectedCompetitor)}
          </div>
        </div>
      )}
    </div>
  );

  const MetricCard = ({ icon, title, value }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
      <div className="mr-4">{icon}</div>
      <div>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setComparisonView(!comparisonView)}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          <FileStack className="mr-2" size={16} /> 
          {comparisonView ? 'Close Comparison' : 'Compare Competitors'}
        </button>
      </div>

      {comparisonView ? (
        renderComparisonView()
      ) : (
        <div className="space-y-6">
          {competitorData.map((competitor, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6"
            >
              <h2 className="text-xl font-bold mb-4">{competitor.name}</h2>
              {renderCompetitorOverview(competitor)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Competitors;