import NextLink from "next/link";
import {
  LinkProps as ChakraLinkProps,
  Link as ChakraLink,
} from "@chakra-ui/react";

interface LinkProps extends ChakraLinkProps {
  pathName: string;
}

const Link: React.FC<LinkProps> = ({ pathName, color, ...props }) => {
  return (
    <ChakraLink
      as={NextLink}
      href={`${pathName.toLowerCase()}`}
      color={color ? color : "darkBlue"}
      {...props}
    >
      {pathName}
    </ChakraLink>
  );
};

export default Link;
