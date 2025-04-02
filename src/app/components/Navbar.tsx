import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function Navbar() {
  return (
    <Flex p={4} bg="pink.400" color="white" justify="space-between">
      <Heading size="md">CycleSync</Heading>
      <Box>
        <NextLink href="/" passHref>
          <Link mr={4}>Home</Link>
        </NextLink>
        <NextLink href="/playground" passHref>
          <Link>Playground</Link>
        </NextLink>
      </Box>
    </Flex>
  );
}