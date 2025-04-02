"use client";

import { Heading, Text, VStack, Image } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function Home() {
  const headingRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fade-in animation for heading section
    gsap.fromTo(
      headingRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // Hover animation for button
    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mouseenter", () =>
        gsap.to(button, { scale: 1.05, duration: 0.2 })
      );
      button.addEventListener("mouseleave", () =>
        gsap.to(button, { scale: 1, duration: 0.2 })
      );
    }
  }, []);

  return (
    <VStack spacing={8} p={8} minH="100vh" bg="pink.50" align="center" justify="center">
      <div ref={headingRef}>
        <Heading as="h1" size="2xl" color="pink.600">
          Menstrual Cycle Predictor
        </Heading>
        <Text fontSize="lg" color="gray.600" mt={4}>
          Understand your cycle, predict ovulation, and get personalized health insights.
        </Text>
      </div>
      <Image src="/workflow.png" alt="Workflow" boxSize="400px" />
      <Link href="/playground">
        <div
          ref={buttonRef}
          style={{
            padding: "16px",
            borderRadius: "8px",
            backgroundColor: "#F06292", // pink.400
            color: "white",
          }}
        >
          Get Started
        </div>
      </Link>
    </VStack>
  );
}