import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Image from "next/image";
import SlideShow from "../components/SlideShow";
import Classes from "../components/Classes";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Androit</title>
        <meta name="description" content="Impact through code learning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box pos="relative" minH="100vh" overflow="hidden">
        <Box pos="absolute" zIndex={-10} inset={0}>
          <Image
            alt=""
            src="/herobg.jpg"
            layout="fill"
            // objectFit="cover"
            quality={100}
          />
        </Box>
        <Box>
          <Header />
          <SlideShow />
          <Classes />
        </Box>
      </Box>
    </Box>
  );
}
