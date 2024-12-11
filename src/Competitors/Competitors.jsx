import React, { useState } from 'react';
import { 
  RadarChart, 
  Radar, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts';
import { 
  AlertTriangle, 
  Shield, 
  TrendingUp, 
  Download, 
  FileText 
} from 'lucide-react';

// Efficacy Benchmarking Data
const efficacyData = [
  { metric: 'Progression-Free Survival', A: 85, B: 75, C: 65, benchmark: 70 },
  { metric: 'Overall Response Rate', A: 75, B: 65, C: 55, benchmark: 60 },
  { metric: 'Quality of Life Impact', A: 80, B: 70, C: 60, benchmark: 65 },
  { metric: 'Treatment Duration', A: 90, B: 80, C: 70, benchmark: 75 },
  { metric: 'Patient Tolerability', A: 85, B: 75, C: 65, benchmark: 70 }
];

// Adverse Event Data
const adverseEventData = [
  { 
    drugName: 'Drug A', 
    adverseEvents: [
      { type: 'Fatigue', incidence: 45, benchmark: 40 },
      { type: 'Nausea', incidence: 30, benchmark: 25 },
      { type: 'Neutropenia', incidence: 20, benchmark: 15 }
    ]
  },
  { 
    drugName: 'Drug B', 
    adverseEvents: [
      { type: 'Fatigue', incidence: 50, benchmark: 40 },
      { type: 'Nausea', incidence: 35, benchmark: 25 },
      { type: 'Neutropenia', incidence: 25, benchmark: 15 }
    ]
  }
];

// Barriers Data
const barriersData = [
  { 
    title: 'Prior Authorization', 
    description: 'High rates across Medicare and Medicaid plans',
    icon: <AlertTriangle className="text-red-500" />
  },
  { 
    title: 'Step Therapy', 
    description: 'Stringent policies limiting first-line treatment',
    icon: <Shield className="text-yellow-500" />
  }
];

// Solutions Data
const solutionsData = [
  "Negotiate reduced step therapy requirements with Payer Z",
  "Focus on Commercial plans with high formulary inclusion potential",
  "Develop targeted patient support programs",
  "Create comparative effectiveness data package"
];

// Key Metrics Data
const keyMetricsData = [
  { 
    title: 'Market Readiness', 
    value: '62%', 
    icon: <TrendingUp className="text-blue-500" /> 
  },
  { 
    title: 'Average Tier Level', 
    value: 'Tier 2', 
    icon: <Shield className="text-green-500" /> 
  },
  { 
    title: 'Top Payer Barrier', 
    value: 'Prior Auth', 
    icon: <AlertTriangle className="text-red-500" /> 
  }
];

const ComprehensiveMarketInsights = () => {
  const [selectedReportMetrics, setSelectedReportMetrics] = useState([]);

  const EfficacyBenchmarking = () => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Efficacy Benchmarking</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={efficacyData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar 
            name="Drug A" 
            dataKey="A" 
            stroke="#8884d8" 
            fill="#8884d8" 
            fillOpacity={0.6} 
          />
          <Radar 
            name="Drug B" 
            dataKey="B" 
            stroke="#82ca9d" 
            fill="#82ca9d" 
            fillOpacity={0.6} 
          />
          <Radar 
            name="Benchmark" 
            dataKey="benchmark" 
            stroke="#ff7300" 
            fill="#ff7300" 
            fillOpacity={0.3} 
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );

  const AdverseEventComparison = () => (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold mb-4">Adverse Event Risk Comparison</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">Drug Name</th>
              <th className="p-2">Adverse Event</th>
              <th className="p-2">Incidence Rate (%)</th>
            </tr>
          </thead>
          <tbody>
            {adverseEventData.flatMap((drug) => 
              drug.adverseEvents.map((event, index) => (
                <tr 
                  key={`${drug.drugName}-${index}`} 
                  className={`border-b ${
                    event.incidence > event.benchmark 
                      ? 'bg-red-50 text-red-700' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <td className="p-2 font-medium">{drug.drugName}</td>
                  <td className="p-2 text-center">{event.type}</td>
                  <td className="p-2 text-center">
                    {event.incidence}% 
                    {event.incidence > event.benchmark && (
                      <span className="ml-2 text-xs">
                        (Above Benchmark)
                      </span>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const BarriersAndSolutions = () => (
    <div className="bg-white rounded-lg shadow-md p-4 col-span-2">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Top Barriers</h3>
          <div className="space-y-3">
            {barriersData.map((barrier, index) => (
              <div 
                key={index} 
                className="flex items-center p-3 bg-gray-50 rounded-lg"
              >
                {barrier.icon}
                <div className="ml-3">
                  <h4 className="font-semibold text-sm">{barrier.title}</h4>
                  <p className="text-xs text-gray-600">{barrier.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Recommended Solutions</h3>
          <ul className="space-y-2">
            {solutionsData.map((solution, index) => (
              <li 
                key={index} 
                className="p-3 bg-blue-50 rounded-lg text-sm flex items-center"
              >
                <TrendingUp className="mr-2 text-blue-500" size={16} />
                {solution}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const InsightsSummary = () => {
    const toggleReportMetric = (metric) => {
      setSelectedReportMetrics(prev => 
        prev.includes(metric)
          ? prev.filter(m => m !== metric)
          : [...prev, metric]
      );
    };

    const handleExportReport = () => {
      // Placeholder for report export functionality
      alert('Exporting report with selected metrics: ' + selectedReportMetrics.join(', '));
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-4 col-span-2">
        <div className="grid grid-cols-3 gap-4">
          {/* Key Metrics Recap */}
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {keyMetricsData.map((metric, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-4 rounded-lg flex items-center"
              >
                {metric.icon}
                <div className="ml-3">
                  <p className="text-xs text-gray-600">{metric.title}</p>
                  <p className="font-semibold">{metric.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Strategic Recommendations */}
          <div className="col-span-2 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Strategic Recommendations</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <TrendingUp className="mr-2 text-blue-500" size={16} />
                Prioritize Commercial plan negotiations
              </li>
              <li className="flex items-center">
                <TrendingUp className="mr-2 text-blue-500" size={16} />
                Develop targeted patient support programs
              </li>
              <li className="flex items-center">
                <TrendingUp className="mr-2 text-blue-500" size={16} />
                Create comprehensive efficacy data package
              </li>
            </ul>
          </div>

          {/* Downloadable Report */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Export Report</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="marketReadiness" 
                  checked={selectedReportMetrics.includes('Market Readiness')}
                  onChange={() => toggleReportMetric('Market Readiness')}
                  className="mr-2"
                />
                <label htmlFor="marketReadiness">Market Readiness</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="tierLevel" 
                  checked={selectedReportMetrics.includes('Tier Level')}
                  onChange={() => toggleReportMetric('Tier Level')}
                  className="mr-2"
                />
                <label htmlFor="tierLevel">Tier Level</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="payerBarriers" 
                  checked={selectedReportMetrics.includes('Payer Barriers')}
                  onChange={() => toggleReportMetric('Payer Barriers')}
                  className="mr-2"
                />
                <label htmlFor="payerBarriers">Payer Barriers</label>
              </div>
              <button 
                onClick={handleExportReport}
                className="w-full mt-4 flex items-center justify-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                <Download className="mr-2" size={16} />
                Export Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Comprehensive Market Insights
          </h1>
          <div className="flex items-center space-x-2 text-gray-600">
            <FileText size={20} />
            <span className="text-sm">Detailed Market Analysis</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <EfficacyBenchmarking />
          <AdverseEventComparison />
          <BarriersAndSolutions />
          <InsightsSummary />
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveMarketInsights;