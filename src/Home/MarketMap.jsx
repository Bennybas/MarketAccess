import React, { useState } from "react";
import { ComposableMap, Geographies, Geography, Text } from "react-simple-maps";

const MarketMap = ({ filter }) => {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";
  // Market Access data for each state
  const diseasePrevalenceData = {
    "01": { abbr: "AL", prevalence: 10, opportunities: 8, risks: 4, value: 5310 },
    "02": { abbr: "AK", prevalence: 7, opportunities: 5, risks: 3, value: 796 },
    "04": { abbr: "AZ", prevalence: 15, opportunities: 10, risks: 5, value: 10228 },
    "05": { abbr: "AR", prevalence: 12, opportunities: 7, risks: 6, value: 4448 },
    "06": { abbr: "CA", prevalence: 20, opportunities: 18, risks: 6, value: 44272 },
    "08": { abbr: "CO", prevalence: 8, opportunities: 6, risks: 4, value: 7249 },
    "09": { abbr: "CT", prevalence: 11, opportunities: 9, risks: 5, value: 4331 },
    "10": { abbr: "DE", prevalence: 9, opportunities: 7, risks: 4, value: 909 },
    "11": { abbr: "DC", prevalence: 14, opportunities: 12, risks: 6, value: 343 },
    "12": { abbr: "FL", prevalence: 25, opportunities: 22, risks: 8, value: 24437 },
    "13": { abbr: "GA", prevalence: 18, opportunities: 15, risks: 7, value: 11417 },
    "15": { abbr: "HI", prevalence: 7, opportunities: 5, risks: 3, value: 1907 },
    "16": { abbr: "ID", prevalence: 10, opportunities: 8, risks: 5, value: 1875 },
    "17": { abbr: "IL", prevalence: 19, opportunities: 14, risks: 6, value: 9840 },
    "18": { abbr: "IN", prevalence: 14, opportunities: 12, risks: 6, value: 5186 },
    "19": { abbr: "IA", prevalence: 9, opportunities: 7, risks: 4, value: 2284 },
    "20": { abbr: "KS", prevalence: 8, opportunities: 6, risks: 3, value: 1989 },
    "21": { abbr: "KY", prevalence: 13, opportunities: 10, risks: 5, value: 4869 },
    "22": { abbr: "LA", prevalence: 16, opportunities: 12, risks: 7, value: 3428 },
    "23": { abbr: "ME", prevalence: 11, opportunities: 8, risks: 4, value: 1911 },
    "24": { abbr: "MD", prevalence: 19, opportunities: 16, risks: 6, value: 8144 },
    "25": { abbr: "MA", prevalence: 18, opportunities: 15, risks: 6, value: 5668 },
    "26": { abbr: "MI", prevalence: 20, opportunities: 17, risks: 8, value: 17044 },
    "27": { abbr: "MN", prevalence: 12, opportunities: 10, risks: 5, value: 5276 },
    "28": { abbr: "MS", prevalence: 13, opportunities: 9, risks: 5, value: 2380 },
    "29": { abbr: "MO", prevalence: 14, opportunities: 12, risks: 6, value: 6478 },
    "30": { abbr: "MT", prevalence: 6, opportunities: 4, risks: 2, value: 478 },
    "31": { abbr: "NE", prevalence: 7, opportunities: 5, risks: 3, value: 1188 },
    "32": { abbr: "NV", prevalence: 9, opportunities: 7, risks: 4, value: 2681 },
    "33": { abbr: "NH", prevalence: 8, opportunities: 6, risks: 3, value: 1529 },
    "34": { abbr: "NJ", prevalence: 18, opportunities: 14, risks: 6, value: 10882 },
    "35": { abbr: "NM", prevalence: 8, opportunities: 6, risks: 3, value: 2142 },
    "36": { abbr: "NY", prevalence: 25, opportunities: 22, risks: 8, value: 18996 },
    "37": { abbr: "NC", prevalence: 18, opportunities: 15, risks: 7, value: 10939 },
    "38": { abbr: "ND", prevalence: 7, opportunities: 5, risks: 3, value: 465 },
    "39": { abbr: "OH", prevalence: 18, opportunities: 14, risks: 6, value: 11427 },
    "40": { abbr: "OK", prevalence: 10, opportunities: 8, risks: 5, value: 3099 },
    "41": { abbr: "OR", prevalence: 14, opportunities: 12, risks: 5, value: 5285 },
    "42": { abbr: "PA", prevalence: 22, opportunities: 18, risks: 8, value: 13668 },
    "44": { abbr: "RI", prevalence: 9, opportunities: 7, risks: 4, value: 1132 },
    "45": { abbr: "SC", prevalence: 14, opportunities: 11, risks: 5, value: 5550 },
    "46": { abbr: "SD", prevalence: 6, opportunities: 4, risks: 2, value: 716 },
    "47": { abbr: "TN", prevalence: 15, opportunities: 12, risks: 6, value: 7804 },
    "48": { abbr: "TX", prevalence: 28, opportunities: 25, risks: 10, value: 23937 },
    "49": { abbr: "UT", prevalence: 9, opportunities: 6, risks: 4, value: 2465 },
    "50": { abbr: "VT", prevalence: 7, opportunities: 5, risks: 3, value: 615 },
    "51": { abbr: "VA", prevalence: 18, opportunities: 15, risks: 7, value: 12572 },
    "53": { abbr: "WA", prevalence: 20, opportunities: 18, risks: 7, value: 9499 },
    "54": { abbr: "WV", prevalence: 11, opportunities: 8, risks: 5, value: 1585 },
    "55": { abbr: "WI", prevalence: 16, opportunities: 13, risks: 6, value: 5528 },
    "56": { abbr: "WY", prevalence: 6, opportunities: 4, risks: 2, value: 385 },
  };
  
  const payerPopulationData = {
    "01": { abbr: "AL", payers: 12 },
    "02": { abbr: "AK", payers: 4 },
    "04": { abbr: "AZ", payers: 20 },
    "05": { abbr: "AR", payers: 15 },
    "06": { abbr: "CA", payers: 50 },
    "08": { abbr: "CO", payers: 18 },
    "09": { abbr: "CT", payers: 16 },
    "10": { abbr: "DE", payers: 6 },
    "11": { abbr: "DC", payers: 8 },
    "12": { abbr: "FL", payers: 40 },
    "13": { abbr: "GA", payers: 25 },
    "15": { abbr: "HI", payers: 8 },
    "16": { abbr: "ID", payers: 10 },
    "17": { abbr: "IL", payers: 35 },
    "18": { abbr: "IN", payers: 22 },
    "19": { abbr: "IA", payers: 12 },
    "20": { abbr: "KS", payers: 10 },
    "21": { abbr: "KY", payers: 20 },
    "22": { abbr: "LA", payers: 18 },
    "23": { abbr: "ME", payers: 6 },
    "24": { abbr: "MD", payers: 25 },
    "25": { abbr: "MA", payers: 30 },
    "26": { abbr: "MI", payers: 28 },
    "27": { abbr: "MN", payers: 18 },
    "28": { abbr: "MS", payers: 14 },
    "29": { abbr: "MO", payers: 22 },
    "30": { abbr: "MT", payers: 5 },
    "31": { abbr: "NE", payers: 8 },
    "32": { abbr: "NV", payers: 15 },
    "33": { abbr: "NH", payers: 8 },
    "34": { abbr: "NJ", payers: 38 },
    "35": { abbr: "NM", payers: 10 },
    "36": { abbr: "NY", payers: 45 },
    "37": { abbr: "NC", payers: 28 },
    "38": { abbr: "ND", payers: 6 },
    "39": { abbr: "OH", payers: 30 },
    "40": { abbr: "OK", payers: 15 },
    "41": { abbr: "OR", payers: 20 },
    "42": { abbr: "PA", payers: 38 },
    "44": { abbr: "RI", payers: 8 },
    "45": { abbr: "SC", payers: 18 },
    "46": { abbr: "SD", payers: 5 },
    "47": { abbr: "TN", payers: 25 },
    "48": { abbr: "TX", payers: 48 },
    "49": { abbr: "UT", payers: 12 },
    "50": { abbr: "VT", payers: 4 },
    "51": { abbr: "VA", payers: 28 },
    "53": { abbr: "WA", payers: 30 },
    "54": { abbr: "WV", payers: 10 },
    "55": { abbr: "WI", payers: 20 },
    "56": { abbr: "WY", payers: 4 },
  };
  // Get Data Based on Filter
  const getDataForState = (stateId) => {
    if (filter === "disease") return diseasePrevalenceData[stateId];
    if (filter === "payer") return payerPopulationData[stateId];
    return null;
  };

  // Color categories based on data
  const getStateColor = (stateData) => {
    if (!stateData) return "#F0F4F8";
    if (filter === "disease") {
      const prevalence = stateData.prevalence;
      if (prevalence >= 20) return "#800026"; // High prevalence (dark red)
      if (prevalence >= 10) return "#FC4E2A"; // Medium prevalence (orange)
      return "#FEB24C"; // Low prevalence (yellow)
    }
    if (filter === "payer") {
      const payers = stateData.payers;
      if (payers >= 20) return "#00441b"; // High payers (dark green)
      if (payers >= 10) return "#238b45"; // Medium payers (green)
      return "#74c476"; // Low payers (light green)
    }
  };

  // Tooltip handlers
  const handleMouseEnter = (geo, e) => {
    const stateId = geo.id;
    const stateData = getDataForState(stateId);
    if (stateData) {
      setTooltipPosition({ x: e.clientX, y: e.clientY });
      if (filter === "disease") {
        setTooltipContent(
          `State: ${stateData.abbr}\nPrevalence: ${stateData.prevalence}%\nRisks: ${stateData.risks}\nMarket Value: $${stateData.value}M`
        );
      } else if (filter === "payer") {
        setTooltipContent(`State: ${stateData.abbr}\nPayers: ${stateData.payers}`);
      }
    } else {
      setTooltipContent("No data available");
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div className="relative w-full h-full">
      <ComposableMap projection="geoAlbersUsa" width={1300} height={600} style={{marginTop:"-5px", marginLeft:"-120px"}}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const stateId = geo.id;
              const stateData = getDataForState(stateId);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={getStateColor(stateData)}
                />

              );
            })
          }
        </Geographies>
      </ComposableMap>
      {tooltipContent && (
        <div
          className="absolute bg-white shadow-md p-2 border text-sm"
          style={{
            top: tooltipPosition.y,
            left: tooltipPosition.x,
            transform: "translate(-50%, -50%)", // Center tooltip around cursor
            zIndex: 10, // Ensure tooltip is above the map
          }}
        >
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default MarketMap;