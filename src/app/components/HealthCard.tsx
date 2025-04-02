import { Box, Heading, Text } from "@chakra-ui/react";

export default function HealthCard({ suggestion }: { suggestion: string }) {
  return (
    <Box p={4} bg="white" rounded="md" shadow="md" w="full" maxW="600px">
      <Heading size="md" color="pink.600" mb={2}>
        Health Suggestion
      </Heading>
      <Text>{suggestion}</Text>
    </Box>
  );
}