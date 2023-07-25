import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import Image from "next/image";
import SlideShow from "../components/SlideShow";
import Classes from "../components/Classes";
import Programs from "../components/Programs";
import Pledges from "../components/Pledges";
import Course from "../components/Course";
import Courses from "../components/Courses";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box>
      <Head>
        <title>ABKASS</title>
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
          <Programs />
          <Pledges />

          <Courses title="O'LEVELS">
            <Course title="WAEC" src="/hc.png" />
            <Course title="NECO" src="/sc.png" />
            <Course title="NABTEB" src="/py.png" />
            <Course title="UTME" src="/js.png" />
            <Course title="POST UTME" src="/js.png" />
          </Courses>
          <Courses title="A'LEVELS">
            <Course title="IJMB" src="/hc.png" />
            <Course title="JUPEB" src="/fe.png" />
            <Course title="CAMBRIDGE" src="/be.jpg" />
            <Course title="NABTEB A'LEVEL" src="/mam.png" />
            <Course title="CAIL'S KWASU" src="/mam.png" />
          </Courses>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
