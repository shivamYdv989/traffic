import React from "react";

export default function TrafficCard({ data }) {
  return (
    <div className="card">
      <h2>📊 Traffic Data</h2>
      <p>
        <strong>Monthly Visits:</strong> {data.visits}
      </p>
      <p>
        <strong>Top Countries:</strong> {data.countries.join(", ")}
      </p>
      <p>
        <strong>Top Referrers:</strong> {data.referrers.join(", ")}
      </p>
    </div>
  );
}
