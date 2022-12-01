import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Androit</title>
        <meta name="description" content="Impact through code learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </Box>
  );
}
