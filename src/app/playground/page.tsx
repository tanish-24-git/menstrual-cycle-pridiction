"use client"

import { useState } from "react"
import {
  Box,
  Heading,
  VStack,
  Text,
  Container,
  Flex,
  Skeleton,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  useDisclosure,
  Divider,
  Card,
  CardBody,
  Stack,
  Badge,
} from "@chakra-ui/react"
import InputForm from "../components/InputForm"
import Chart from "../components/Chart"
import HealthCard from "../components/HealthCard"
import { fetchPrediction } from "../lib/api"

export default function Playground() {
  const [prediction, setPrediction] = useState<any>(null)
  const [healthSuggestion, setHealthSuggestion] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { isOpen: isErrorVisible, onClose: onErrorClose, onOpen: onErrorOpen } = useDisclosure()
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (data: any) => {
    setIsLoading(true)
    try {
      const result = await fetchPrediction(data)
      setPrediction(result.predictions)
      setHealthSuggestion(result.health_suggestion)
    } catch (error) {
      console.error("Error:", error)
      setErrorMessage("Failed to get prediction. Please try again later.")
      onErrorOpen()
    } finally {
      setIsLoading(false)
    }
  }

  const chartData = prediction
    ? {
        labels: ["Cycle Length", "Ovulation Day"],
        datasets: [
          {
            label: "Predicted Values (Days)",
            data: [prediction.cycle_length, prediction.ovulation_day],
            backgroundColor: ["rgba(237, 100, 166, 0.8)", "rgba(54, 162, 235, 0.8)"],
            borderColor: ["rgba(237, 100, 166, 1)", "rgba(54, 162, 235, 1)"],
            borderWidth: 1,
          },
        ],
      }
    : {
        labels: ["Cycle Length", "Ovulation Day"],
        datasets: [
          {
            label: "Predicted Values (Days)",
            data: [0, 0],
            backgroundColor: ["rgba(237, 100, 166, 0.8)", "rgba(54, 162, 235, 0.8)"],
          },
        ],
      }

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" color="brand.600" textAlign="center">
          Menstrual Cycle Prediction
        </Heading>

        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="800px" mx="auto">
          Enter your menstrual cycle information below to get personalized predictions and health insights.
        </Text>

        {isErrorVisible && (
          <Alert status="error" borderRadius="md">
            <AlertIcon />
            <AlertTitle mr={2}>Error!</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
            <CloseButton position="absolute" right="8px" top="8px" onClick={onErrorClose} />
          </Alert>
        )}

        <Flex direction={{ base: "column", lg: "row" }} gap={8} justify="center" align="start">
          <Box flex="1">
            <InputForm onSubmit={handleSubmit} />
          </Box>

          {isLoading ? (
            <Box flex="1">
              <VStack spacing={6} align="stretch">
                <Skeleton height="400px" borderRadius="lg" />
                <Skeleton height="100px" borderRadius="lg" />
                <Skeleton height="200px" borderRadius="lg" />
              </VStack>
            </Box>
          ) : prediction ? (
            <Box flex="1">
              <VStack spacing={6} align="stretch">
                <Chart data={chartData} />

                <Card>
                  <CardBody>
                    <Stack spacing={4}>
                      <Heading size="md" color="brand.500">
                        Prediction Results
                      </Heading>
                      <Divider />
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="bold">Predicted Cycle Length:</Text>
                        <Badge colorScheme="pink" fontSize="lg" px={3} py={1} borderRadius="full">
                          {prediction.cycle_length.toFixed(1)} days
                        </Badge>
                      </Flex>
                      <Flex justify="space-between" align="center">
                        <Text fontWeight="bold">Predicted Ovulation Day:</Text>
                        <Badge colorScheme="blue" fontSize="lg" px={3} py={1} borderRadius="full">
                          Day {prediction.ovulation_day.toFixed(1)}
                        </Badge>
                      </Flex>
                    </Stack>
                  </CardBody>
                </Card>

                <HealthCard suggestion={healthSuggestion} />
              </VStack>
            </Box>
          ) : (
            <Box
              flex="1"
              bg="white"
              p={8}
              borderRadius="lg"
              boxShadow="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
              minH="400px"
            >
              <Text color="gray.500" fontSize="lg" textAlign="center">
                Fill out the form and click "Predict Cycle" to see your results here.
              </Text>
            </Box>
          )}
        </Flex>
      </VStack>
    </Container>
  )
}

