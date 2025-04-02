"use client"

import type React from "react"

import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import Navbar from "./components/Navbar"

const theme = extendTheme({
  colors: {
    brand: {
      50: "#FFF5F7",
      100: "#FED7E2",
      200: "#FBB6CE",
      300: "#F687B3",
      400: "#ED64A6",
      500: "#D53F8C",
      600: "#B83280",
      700: "#97266D",
      800: "#702459",
      900: "#521B41",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.50",
      },
    },
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      {children}
    </ChakraProvider>
  )
}

