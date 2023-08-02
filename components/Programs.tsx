import React from "react";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import Program from "./Program";

const Programs = () => {
  return (
    <Box bg="white" p={10}>
      <Heading textAlign="center" mb={4}>
        OUR TRENDING PROGRAMS.
      </Heading>

      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
        <Program title="O'Levels" text="WAEC, NECO, NABTEB, UTME, POST UTME" />
        <Program
          title="A'Levels"
          text="IJMB, JUPEB, NABTEB A'LEVEL, CAILS'S KWASU"
        />
        {/* UNIVERISTY FOUNDATION PROGRAMES */}
        <Program
          title="International Exams"
          text="CAMBRIDGE, TOEFL, IELTS, SAT, GRE, GMAT"
        />
        {/* <Program text="FRONT END AND BACK END PROGRAM FOR ADULT (5 MONTHS)" /> */}
      </SimpleGrid>
    </Box>
  );
};

export default Programs;
