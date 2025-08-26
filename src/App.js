import React, { useState } from "react";
import { fetchTrafficData } from "./api";
import TrafficCard from "./TrafficCard";
import "./styles.css";

export default function App() {
  const [domain, setDomain] = useState("");
  const [data, setData] = useState(null);

  const handleAnalyze = async () => {
    const result = await fetchTrafficData(domain);
    setData(result);
  };

  return (
    <div className="container">
      <h1>🌐 Traffic Analysis</h1>
      <input
        type="text"
        placeholder="Enter domain (e.g. example.com)"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
      />
      <button onClick={handleAnalyze}>Analyze</button>
      {data && <TrafficCard data={data} />}
    </div>
  );
}
