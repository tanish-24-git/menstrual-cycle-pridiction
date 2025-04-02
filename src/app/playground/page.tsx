"use client";

import { useState } from "react";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import InputForm from "../../components/InputForm";
import Chart from "../../components/Chart";
import HealthCard from "../../components/HealthCard";
import { fetchPrediction } from "../../lib/api";

export default function Playground() {
  const [prediction, setPrediction] = useState(null);
  const [healthSuggestion, setHealthSuggestion] = useState("");

  const handleSubmit = async (data: any) => {
    const result = await fetchPrediction(data);
    setPrediction(result.predictions);
    setHealthSuggestion(result.health_suggestion);
  };

  const chartData = prediction
    ? {
        labels: ["Cycle Length", "Ovulation Day"],
        datasets: [
          {
            label: "Predicted Values",
            data: [prediction.cycle_length, prediction.ovulation_day],
            backgroundColor: ["#FF6384", "#36A2EB"],
          },
        ],
      }
    : null;

  return (
    <VStack spacing={8} p={8} minH="100vh" bg="pink.50">
      <Heading as="h1" size="xl" color="pink.600">
        Cycle Prediction Playground
      </Heading>
      <InputForm onSubmit={handleSubmit} />
      {prediction && (
        <>
          <Box w="full" maxW="600px">
            <Chart data={chartData} />
          </Box>
          <Text fontSize="lg" color="gray.600">
            Predicted Cycle Length: {prediction.cycle_length.toFixed(1)} days | Ovulation Day: {prediction.ovulation_day.toFixed(1)}
          </Text>
          <HealthCard suggestion={healthSuggestion} />
        </>
      )}
    </VStack>
  );
}