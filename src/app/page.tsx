"use client"

import { Heading, Text, VStack, Image, Button, Box, Container } from "@chakra-ui/react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import Link from "next/link"

export default function Home() {
  const headingRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fade-in animation for heading section
    gsap.fromTo(headingRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 })

    // Fade-in animation for image
    gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1, delay: 0.3 })

    // Hover animation for button
    const button = buttonRef.current
    if (button) {
      button.addEventListener("mouseenter", () => gsap.to(button, { scale: 1.05, duration: 0.2 }))
      button.addEventListener("mouseleave", () => gsap.to(button, { scale: 1, duration: 0.2 }))
    }

    return () => {
      if (button) {
        button.removeEventListener("mouseenter", () => {})
        button.removeEventListener("mouseleave", () => {})
      }
    }
  }, [])

  return (
    <Container maxW="container.xl">
      <VStack spacing={10} py={16} align="center" justify="center">
        <Box ref={headingRef} textAlign="center" maxW="800px">
          <Heading as="h1" size="2xl" color="brand.600" mb={4}>
            CycleSync: Menstrual Cycle Predictor
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Understand your cycle, predict ovulation, and get personalized health insights powered by machine learning.
          </Text>
        </Box>

        <Box ref={imageRef} borderRadius="lg" overflow="hidden" boxShadow="xl" my={8}>
          <Image src="/placeholder.svg?height=400&width=600" alt="Menstrual Cycle Tracking" width={600} height={400} />
        </Box>

        <Box>
          <Link href="/playground" passHref>
            <Button
              ref={buttonRef as any}
              size="lg"
              bg="brand.400"
              color="white"
              _hover={{ bg: "brand.500" }}
              px={8}
              py={6}
              fontSize="lg"
              borderRadius="full"
              boxShadow="md"
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  )
}

