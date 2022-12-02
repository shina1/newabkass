import NextLink from "next/link";
import {
  LinkProps as ChakraLinkProps,
  Link as ChakraLink,
} from "@chakra-ui/react";

interface LinkProps extends ChakraLinkProps {
  pathName: string;
  type?: "button";
  text?: string;
}

const Link: React.FC<LinkProps> = ({
  pathName,
  type,
  text,
  color,
  ...props
}) => {
  if (type) {
    return (
      <ChakraLink
        as={NextLink}
        href={`${pathName.toLowerCase()}`}
        color={"white"}
        {...props}
        bg="bgOrange"
        p={4}
        borderRadius={4}
      >
        {text}
      </ChakraLink>
    );
  }
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
