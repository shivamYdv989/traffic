export async function fetchTrafficData(domain) {
  const apiKey = "YOUR_API_KEY"; // Replace with your SimilarWeb or RapidAPI key
  const url = `https://api.tomtom.com/traffic/services/4/flowSegmentData/relative0/21/json?point=52.41072%2C4.84239&unit=KMPH&openLr=true&key=*****
  `;

  try {
    const res = await fetch(url);
    const json = await res.json();
    return {
      visits: json.visits || "N/A",
      countries: json.top_countries?.map((c) => c.country) || [],
      referrers: json.referring_sites?.map((r) => r.site) || [],
    };
  } catch (err) {
    console.error("API error:", err);
    return null;
  }
}
