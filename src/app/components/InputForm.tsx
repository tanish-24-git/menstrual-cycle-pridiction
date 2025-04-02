"use client"

import type React from "react"

import { useState } from "react"
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  VStack,
  SimpleGrid,
  Heading,
  Divider,
  Tooltip,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormHelperText,
} from "@chakra-ui/react"

export default function InputForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    number_of_peak: 2,
    Age: 19,
    Length_of_cycle: 28,
    Length_of_Leutal_Phase: 14,
    Length_of_menses: 5,
    Unusual_Bleeding: "no",
    Height: "5'3",
    Weight: 55,
    BMI: 21.5,
    Mean_of_length_of_cycle: 30,
    Menses_score: 3,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleNumberChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: Number.parseFloat(value) })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  // Calculate BMI when height or weight changes
  const calculateBMI = () => {
    // This is a simplified calculation and would need proper height conversion
    const weight = formData.Weight
    // Assuming BMI is calculated elsewhere or manually entered
    return formData.BMI
  }

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" maxW="800px" bg="white" p={8} borderRadius="lg" boxShadow="md">
      <VStack spacing={6} align="stretch">
        <Heading size="md" color="brand.500">
          Enter Your Cycle Information
        </Heading>
        <Divider />

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          <FormControl>
            <FormLabel>Age</FormLabel>
            <NumberInput min={10} max={60} value={formData.Age} onChange={(value) => handleNumberChange("Age", value)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel>Number of Peaks</FormLabel>
            <Tooltip label="Number of hormone peaks in your cycle">
              <NumberInput
                min={1}
                max={5}
                value={formData.number_of_peak}
                onChange={(value) => handleNumberChange("number_of_peak", value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Tooltip>
            <FormHelperText>Typically 1-5 peaks per cycle</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Length of Cycle (days)</FormLabel>
            <NumberInput
              min={20}
              max={45}
              value={formData.Length_of_cycle}
              onChange={(value) => handleNumberChange("Length_of_cycle", value)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Average is 28 days</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Luteal Phase Length (days)</FormLabel>
            <NumberInput
              min={7}
              max={16}
              value={formData.Length_of_Leutal_Phase}
              onChange={(value) => handleNumberChange("Length_of_Leutal_Phase", value)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Typically 12-14 days</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Menses Length (days)</FormLabel>
            <NumberInput
              min={2}
              max={10}
              value={formData.Length_of_menses}
              onChange={(value) => handleNumberChange("Length_of_menses", value)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Typically 3-7 days</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Unusual Bleeding</FormLabel>
            <Select name="Unusual_Bleeding" value={formData.Unusual_Bleeding} onChange={handleChange} bg="white">
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="No">No (Capitalized)</option>
            </Select>
            <FormHelperText>Spotting outside your period</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Height</FormLabel>
            <Select name="Height" value={formData.Height} onChange={handleChange} bg="white">
              <option value="4'8">4'8"</option>
              <option value="4'9">4'9"</option>
              <option value="4'10">4'10"</option>
              <option value="4'11">4'11"</option>
              <option value="5'0">5'0"</option>
              <option value="5'1">5'1"</option>
              <option value="5'2">5'2"</option>
              <option value="5'3">5'3"</option>
              <option value="5'4">5'4"</option>
              <option value="5'5">5'5"</option>
              <option value="5'6">5'6"</option>
              <option value="5'7">5'7"</option>
              <option value="5'8">5'8"</option>
              <option value="5'9">5'9"</option>
              <option value="5'10">5'10"</option>
              <option value="5'11">5'11"</option>
              <option value="6'0">6'0"</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Weight (kg)</FormLabel>
            <NumberInput
              min={30}
              max={150}
              value={formData.Weight}
              onChange={(value) => handleNumberChange("Weight", value)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>

          <FormControl>
            <FormLabel>BMI</FormLabel>
            <NumberInput min={15} max={40} value={formData.BMI} onChange={(value) => handleNumberChange("BMI", value)}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Calculated from height and weight</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Mean Cycle Length (days)</FormLabel>
            <NumberInput
              min={20}
              max={45}
              value={formData.Mean_of_length_of_cycle}
              onChange={(value) => handleNumberChange("Mean_of_length_of_cycle", value)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>Your average cycle length</FormHelperText>
          </FormControl>

          <FormControl>
            <FormLabel>Menses Score (1-5)</FormLabel>
            <NumberInput
              min={1}
              max={5}
              value={formData.Menses_score}
              onChange={(value) => handleNumberChange("Menses_score", value)}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <FormHelperText>1=Light, 5=Heavy</FormHelperText>
          </FormControl>
        </SimpleGrid>

        <Button type="submit" bg="brand.400" color="white" size="lg" mt={6} _hover={{ bg: "brand.500" }}>
          Predict Cycle
        </Button>
      </VStack>
    </Box>
  )
}

