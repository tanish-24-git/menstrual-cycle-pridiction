// Mock API for development - will connect to the real backend when deployed
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

export async function fetchPrediction(data: any) {
  try {
    // For development, we'll use a mock response if the API is not available
    if (process.env.NODE_ENV === "development" && !process.env.NEXT_PUBLIC_API_URL) {
      console.log("Using mock API response for development")
      return mockPredictionResponse(data)
    }

    const response = await fetch(`${API_BASE_URL}/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching prediction:", error)
    // Fallback to mock data if API call fails
    return mockPredictionResponse(data)
  }
}

// Mock response for development and testing
function mockPredictionResponse(data: any) {
  // Calculate mock predictions based on input data
  const cycleLength = data.Length_of_cycle * 0.95 + Math.random() * 2
  const ovulationDay = Math.round(cycleLength / 2) - 1 + (Math.random() * 2 - 1)

  return {
    predictions: {
      cycle_length: cycleLength,
      ovulation_day: ovulationDay,
    },
    health_suggestion: `Based on your data, your cycle appears to be regular with an average length of ${Math.round(cycleLength)} days.\n\nYour predicted ovulation is around day ${Math.round(ovulationDay)} of your cycle. This is when you're most fertile if you're trying to conceive.\n\nMaintaining a healthy lifestyle with regular exercise and a balanced diet can help regulate your menstrual cycle. Consider tracking your symptoms throughout your cycle to identify patterns.\n\nIf you experience unusual bleeding or severe pain, it's recommended to consult with a healthcare provider.`,
  }
}

