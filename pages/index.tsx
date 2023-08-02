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
            <Course title="WAEC" src="/waec.png" />
            <Course title="NECO" src="/neco.jpg" />
            <Course title="NABTEB" src="/nabteb.jpg" />
            <Course title="UTME" src="/jamb.png" />
            <Course title="POST UTME" src="/utme.jpg" />
          </Courses>
          <Courses title="A'LEVELS">
            <Course title="IJMB" src="/ijmb.jpg" />
            <Course title="JUPEB" src="/jupeb.jpg" />
            <Course title="NABTEB A'LEVEL" src="/nabteb.jpg" />
            <Course title="CAIL'S KWASU" src="/kwasu.jpg" />
          </Courses>
          <Courses title="INTERNATIONAL ExAMS">
            {/*  */}
            <Course title="CAMBRIDGE" src="/cambridge.png" />
            <Course title="IELTS" src="/ielts.png" />
            <Course title="TOEFL" src="/ets.png" />
          </Courses>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
}
