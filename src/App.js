import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminScreen from "./screens/AdminScreen";
import AgentScreen from "./screens/AgentScreen";
import ProfilingScreen from "./screens/ProfilingScreen";
import CollectorScreen from "./screens/CollectorScreen";
import CollectionScreen from "./screens/CollectionScreen";
import ReportScreen from "./screens/ReportScreen";
import LoginScreen from "./screens/LoginScreen";
import AboutScreen from "./screens/AboutScreen";
import RegisterScreen from "./screens/RegisterScreen";
function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/admin" element={<AdminScreen />} />
          <Route path="/agent" element={<AgentScreen />} />
          <Route path="/profiling" element={<ProfilingScreen />} />
          <Route path="/collector" element={<CollectorScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
          <Route path="/report" element={<ReportScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
