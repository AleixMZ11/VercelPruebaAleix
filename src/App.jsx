import React, { useState } from "react";
import CVForm from "./components/CVForm";
import CVPreview from "./components/CVPreview";
import StatsChart from "./components/StatsChart";

const App = () => {
  const [cvData, setCvData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    education: "Bachelor's in Computer Science",
    experience: "3 years as a Software Developer",
  });

  return (
    <div className="p-8 space-y-8">
      <CVForm onUpdate={setCvData} />
      <CVPreview data={cvData} />
      <StatsChart />
    </div>
  );
};

export default App;