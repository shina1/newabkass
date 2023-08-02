import React from "react";
import Class from "./Class";
import {
  SimpleGrid,
  Box,
  Heading,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaPen, FaSchool } from "react-icons/fa";
import { MdGroups, MdOnlinePrediction } from "react-icons/md";
import Link from "./NavLink";

const Classes = () => {
  return (
    <Box p="48px" bg="white" maxW="100vw">
      <SimpleGrid
        mb="48px"
        columns={{ base: 1, lg: 4 }}
        spacing={10}
        overflow="hidden"
      >
        <Class
          icon={<Icon color="white" as={FaPen} />}
          name="1:1 Private Class"
        />
        <Class
          icon={<Icon color="white" as={MdGroups} />}
          name="Mock CBT Tests"
        />
        <Class
          icon={<Icon color="white" as={FaSchool} />}
          name="Practical Classes"
        />
        <Class
          icon={<Icon color="white" as={MdOnlinePrediction} />}
          name="Online Class"
        />
      </SimpleGrid>
      <Container maxW="90vw">
        <Heading>Start Learning Now!</Heading>
        <VStack spacing={8} my={8}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam fugit ducimus laborum fuga esse perferendis dolores amet
            necessitatibus, hic laudantium nemo quisquam dolorum velit sit, sed
            alias. Blanditiis, impedit.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam fugit ducimus laborum fuga esse perferendis dolores amet
            necessitatibus, hic laudantium nemo quisquam dolorum velit sit, sed
            alias. Blanditiis, impedit.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            laboriosam fugit ducimus laborum fuga esse perferendis dolores amet
            necessitatibus, hic laudantium nemo quisquam dolorum velit sit, sed
            alias. Blanditiis, impedit.
          </Text>
        </VStack>
        <VStack alignItems="flex-start" spacing={8}>
          <Heading size="md">
            Gain admision into any university of your choise in Nigeria and
            overseas without stress
          </Heading>
          <Link
            type="button"
            pathName="https://forms.gle/M1o6Dn59BxkW25rbA"
            isExternal
            text="Join Us"
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default Classes;
