import "@/styles/globals.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import TopBar from '@/components/TopBar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TopBar />
      <Box maxWidth="container.xl" margin="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}
