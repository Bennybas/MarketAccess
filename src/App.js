import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TherapeuticArea from './Ta/TherapeuticArea';
import Dashboard from "./overview/Dashboard";
import Competitors from "./Competitors/Competitors";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TherapeuticArea />} />  {/* Default route */}
        <Route path="/Ta" element={<TherapeuticArea />} />
        <Route path="/overview" element={<Dashboard />} />
        <Route path="/Competitors" element={<Competitors />} />
        
      </Routes>
    </Router>
  );
};

export default App;
