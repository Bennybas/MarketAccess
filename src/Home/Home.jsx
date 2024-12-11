import React, { useState } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Users, UserSearch, BriefcaseMedical,Hash, DollarSign,CircleUser } from 'lucide-react'
import MarketMap from './MarketMap'


const HomeContent = () => {
  const drugs = [
    { name: 'Zytiga', sponsor: 'Janssen', price: '150.00' },
    { name: 'Xtandi', sponsor: 'Medivation', price: '120.00' },
    { name: 'Erleada', sponsor: 'Bayer', price: '130.00' },
    { name: 'Nubeqa', sponsor: 'Seagen', price: '140.00' },
    { name: 'Casodex', sponsor: 'Astellas', price: '110.00' },
    { name: 'Firmagon', sponsor: 'Ferring', price: '100.00' },
    { name: 'Cyproheptadine', sponsor: 'Endo', price: '90.00' },
    { name: 'Kapteyn', sponsor: 'Bayer', price: '160.00' },
    { name: 'Nexavar', sponsor: 'Bayer', price: '170.00' },
    { name: 'Xofigo', sponsor: 'Progenics', price: '180.00' },
  ];

  const [filter, setFilter] = useState("disease");

  return (
    <div>
      <div className="flex">
        <div className='flex flex-col'>
          <div className="w-[200px] h-[500px] border-2 rounded-xl border-gray-300 shadow-md flex flex-col items-center justify-center space-y-4 p-1 bg-white">
            <div className="text-md font-semibold text-gray-700 tracking-wider">
              Payer Type %
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 w-full">
              <div className="w-full max-w-[110px] h-[110px] flex flex-col items-center justify-center">
                <CircularProgressbar
                  value={74}
                  text="74%"
                  strokeWidth={10}
                  styles={{
                    path: { stroke: '#005A8C', transition: 'stroke-dashoffset 0.5s ease 0s' },
                    trail: { stroke: '#e6e6e6' },
                    text: { 
                      fill: '#005A8C', 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      dominantBaseline: 'middle',
                      textAnchor: 'middle'
                    },
                  }}
                />
                <div className="text-center mt-2">
                  <span className="font-bold text-gray-700">Medicare</span>
                </div>
              </div>

              <div className="w-full max-w-[110px] h-[110px] flex flex-col items-center justify-center">
                <CircularProgressbar
                  value={80}
                  text="80%"
                  strokeWidth={10}
                  styles={{
                    path: { stroke: '#007A4D', transition: 'stroke-dashoffset 0.5s ease 0s' },
                    trail: { stroke: '#e6e6e6' },
                    text: { 
                      fill: '#007A4D', 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      dominantBaseline: 'middle',
                      textAnchor: 'middle'
                    },
                  }}
                />
                <div className="text-center mt-2">
                  <span className="font-bold text-gray-700">Medicaid</span>
                </div>
              </div>

              <div className="w-full max-w-[110px] h-[110px] flex flex-col items-center justify-center">
                <CircularProgressbar
                  value={60}
                  text="60%"
                  strokeWidth={10}
                  styles={{
                    path: { stroke: '#B22234', transition: 'stroke-dashoffset 0.5s ease 0s' },
                    trail: { stroke: '#e6e6e6' },
                    text: { 
                      fill: '#B22234', 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      dominantBaseline: 'middle',
                      textAnchor: 'middle'
                    },
                  }}
                />
                <div className="text-center mt-2">
                  <span className="font-bold text-gray-700">Commercial</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-1 space-y-2">
          {/* Row with Four Divs */}
          <div className="flex flex-row space-x-1">
            {/* First Div */}
            <div className="p-1">
              <div className="w-[180px] h-[80px] border-2 rounded-xl border-gray-300 shadow-md flex flex-row items-center justify-between space-x-2 p-2 bg-white">
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-[#c98b27]" />
                  <div className="ml-2">
                    <div className="text-sm text-gray-700">Enrollment Count</div>
                    <div className="h-[1px] w-full bg-gray-300 my-1"></div>
                    <div className="text-sm font-bold text-gray-900 ml-4">37,839</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Div */}
            <div className="p-1">
              <div className="w-[180px] h-[80px] border-2 rounded-xl border-gray-300 shadow-md flex flex-row items-center justify-between space-x-2 p-2 bg-white">
                <div className="flex items-center">
                  <UserSearch className="w-6 h-6 text-[#c98b27]" />
                  <div className="ml-2">
                    <div className="text-sm text-gray-700">Payers Count</div>
                    <div className="h-[1px] w-full bg-gray-300 my-1"></div>
                    <div className="text-sm font-bold text-gray-900 ml-4">6,350</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Div */}
            <div className="p-1">
              <div className="w-[180px] h-[80px] border-2 rounded-xl border-gray-300 shadow-md flex flex-row items-center justify-between space-x-2 p-2 bg-white">
                <div className="flex items-center">
                  <BriefcaseMedical className="w-6 h-6 text-[#c98b27]" />
                  <div className="ml-2">
                    <div className="text-sm text-gray-700">Drugs Count</div>
                    <div className="h-[1px] w-full bg-gray-300 my-1"></div>
                    <div className="text-sm font-bold text-gray-900 ml-4">20</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Div */}
            <div className="p-1">
              <div className="w-[180px] h-[80px] border-2 rounded-xl border-gray-300 shadow-md flex flex-row items-center justify-between space-x-2 p-2 bg-white">
                <div className="flex items-center">
                  <CircleUser className="w-6 h-6 text-blue-500" />
                  <div className="ml-2">
                    <div className="text-sm text-gray-700">Male</div>
                    <div className="h-[1px] w-full bg-gray-300 my-1"></div>
                    <div className="text-sm font-bold text-gray-900 ml-4">60</div>
                  </div>
                </div>
                
                <div className="h-[50px] w-[1px] bg-gray-300"></div> {/* Vertical line separator */}
                
                <div className="flex items-center">
                  <CircleUser className="w-6 h-6 text-pink-500" />
                  <div className="ml-2">
                    <div className="text-sm text-gray-700">Female</div>
                    <div className="h-[1px] w-full bg-gray-300 my-1"></div>
                    <div className="text-sm font-bold text-gray-900 ml-4">40</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* New Div Below */}
          <div className="flex gap-4">
          <div className="relative w-[750px] h-[400px] border-2 rounded-xl border-gray-300 shadow-md bg-white ml-2">
            {/* Map container */}
            <div className="w-full h-full">
              <MarketMap filter={filter} />
            </div>

            {/* Buttons in top right corner */}
            <div className="absolute top-2 right-2 flex space-x-2">
              <button
                className={`px-4 py-2 rounded transition-colors ${
                  filter === "disease"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setFilter("disease")}
              >
                Disease Prevalence
              </button>
              <button
                className={`px-4 py-2 rounded transition-colors ${
                  filter === "payer"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setFilter("payer")}
              >
                Payers Count
              </button>
            </div>

            {/* Legend in bottom right corner */}
            <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 p-2 rounded-lg border border-gray-200">
              <div className="text-sm font-semibold mb-2">Legend</div>
              <div className="space-y-1">
                {filter === "disease" && (
                  <>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 mr-2"></div>
                      <span>Low Prevalence</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
                      <span>Medium Prevalence</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-red-500 mr-2"></div>
                      <span>High Prevalence</span>
                    </div>
                  </>
                )}
                {filter === "payer" && (
                  <>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-light-green-500 mr-2"></div>
                      <span>Private Payers</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 mr-2"></div>
                      <span>Public Payers</span>
                    </div>
                    
                  </>
                )}
              </div>
            </div>


          </div>
        </div>

         
        </div>
        

        

        <div className="flex flex-col p-2 space-y-4 items-end"> 
          <div className="w-[210px] h-[500px] border-2 rounded-xl border-gray-300 shadow-md flex flex-col items-start justify-between space-y-2 p-2 bg-white">
            <div className="flex items-center mb-2">
              <Users className="w-6 h-6 text-[#c98b27]" />
              <div className="ml-2">
                <div className='text-sm text-gray-700'>Prostate Cancer Drugs</div>
              </div>
            </div>
            <div className="flex flex-col space-y-1 w-full overflow-y-auto">
              {drugs.map((drug, index) => (
                <div key={index} className="flex justify-between items-center w-full p-1 border-b border-gray-200 last:border-b-0">
                  <div className="flex flex-col items-start">
                    <div className="text-sm text-gray-900">{drug.name}</div>
                    <div className="text-xs text-gray-500">{drug.sponsor}</div>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 text-gray-500" />
                    <div className="ml-1 text-sm text-gray-900">{drug.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;