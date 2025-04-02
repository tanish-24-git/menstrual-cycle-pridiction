"use client"

import { Flex, Heading, Link, Button, useColorMode, HStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex p={4} bg="white" boxShadow="sm" justify="space-between" align="center" position="sticky" top={0} zIndex={10}>
      <NextLink href="/" passHref>
        <Heading size="md" color="brand.500" cursor="pointer">
          CycleSync
        </Heading>
      </NextLink>

      <HStack spacing={8}>
        <NextLink href="/" passHref>
          <Link color="gray.600" fontWeight="medium" _hover={{ color: "brand.500" }}>
            Home
          </Link>
        </NextLink>
        <NextLink href="/playground" passHref>
          <Link color="gray.600" fontWeight="medium" _hover={{ color: "brand.500" }}>
            Playground
          </Link>
        </NextLink>
        <Button onClick={toggleColorMode} variant="ghost" aria-label="Toggle color mode">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </HStack>
    </Flex>
  )
}

