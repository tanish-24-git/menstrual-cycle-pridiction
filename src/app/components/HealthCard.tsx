"use client"

import { Box, Heading, Text, VStack, Divider, Icon, Flex, Badge } from "@chakra-ui/react"
import { InfoIcon } from "@chakra-ui/icons"

export default function HealthCard({ suggestion }: { suggestion: string }) {
  // Split the suggestion into paragraphs for better formatting
  const paragraphs = suggestion.split("\n").filter((p) => p.trim() !== "")

  return (
    <Box p={6} bg="white" rounded="lg" shadow="md" w="full" maxW="800px" borderWidth="1px" borderColor="brand.100">
      <VStack align="stretch" spacing={4}>
        <Flex align="center">
          <Icon as={InfoIcon} color="brand.500" boxSize={5} mr={2} />
          <Heading size="md" color="brand.600">
            Health Insights
          </Heading>
          <Badge ml={2} colorScheme="pink" variant="subtle">
            AI Generated
          </Badge>
        </Flex>

        <Divider />

        <VStack align="stretch" spacing={3}>
          {paragraphs.map((paragraph, index) => (
            <Text key={index} fontSize="md" color="gray.700">
              {paragraph}
            </Text>
          ))}
        </VStack>
      </VStack>
    </Box>
  )
}

