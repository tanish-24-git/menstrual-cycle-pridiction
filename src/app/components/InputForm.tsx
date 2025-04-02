import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

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
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box as="form" onSubmit={handleSubmit} w="full" maxW="400px">
      <FormControl mb={4}>
        <FormLabel>Number of Peaks</FormLabel>
        <Input type="number" name="number_of_peak" value={formData.number_of_peak} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Age</FormLabel>
        <Input type="number" name="Age" value={formData.Age} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Length of Cycle</FormLabel>
        <Input type="number" name="Length_of_cycle" value={formData.Length_of_cycle} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Luteal Phase Length</FormLabel>
        <Input type="number" name="Length_of_Leutal_Phase" value={formData.Length_of_Leutal_Phase} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Menses Length</FormLabel>
        <Input type="number" name="Length_of_menses" value={formData.Length_of_menses} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Unusual Bleeding</FormLabel>
        <Select name="Unusual_Bleeding" value={formData.Unusual_Bleeding} onChange={handleChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="No">No (Capitalized)</option>
        </Select>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Height</FormLabel>
        <Select name="Height" value={formData.Height} onChange={handleChange}>
          <option value="5'0">5'0</option>
          <option value="5'3">5'3</option>
          <option value="5'6">5'6</option>
          {/* Add more options as needed */}
        </Select>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Weight (kg)</FormLabel>
        <Input type="number" name="Weight" value={formData.Weight} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>BMI</FormLabel>
        <Input type="number" name="BMI" value={formData.BMI} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Mean Cycle Length</FormLabel>
        <Input type="number" name="Mean_of_length_of_cycle" value={formData.Mean_of_length_of_cycle} onChange={handleChange} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Menses Score</FormLabel>
        <Input type="number" name="Menses_score" value={formData.Menses_score} onChange={handleChange} />
      </FormControl>
      <Button type="submit" bg="pink.400" color="white" w="full">
        Predict
      </Button>
    </Box>
  );
}