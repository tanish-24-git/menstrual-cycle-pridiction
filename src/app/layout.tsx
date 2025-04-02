import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar"; // Correct relative path
import "./globals.css"; // Already correct

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}