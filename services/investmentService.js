const WEBHOOK_URL =
  "https://shethu28.app.n8n.cloud/webhook/collect-user-data";

export async function getInvestmentRecommendation(userData) {
  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Backend error");
  }

  const data = await response.json();

  console.log("✅ AI RESPONSE FROM n8n:", data);

  return data;
}
