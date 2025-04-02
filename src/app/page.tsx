import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const MotionBox = motion(Box);

export default function Home() {
  return (
    <VStack spacing={8} p={8} minH="100vh" bg="pink.50" align="center" justify="center">
      <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Heading as="h1" size="2xl" color="pink.600">
          Menstrual Cycle Predictor
        </Heading>
        <Text fontSize="lg" color="gray.600" mt={4}>
          Understand your cycle, predict ovulation, and get personalized health insights.
        </Text>
      </MotionBox>
      <Image src="/workflow.png" alt="Workflow" boxSize="400px" />
      <Link href="/playground">
        <MotionBox
          as="button"
          bg="pink.400"
          color="white"
          p={4}
          rounded="md"
          whileHover={{ scale: 1.05 }}
        >
          Get Started
        </MotionBox>
      </Link>
    </VStack>
  );
}