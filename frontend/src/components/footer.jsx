import {
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import LogoBlack from "../assets/logo.png";
import LogoWhite from "../assets/logoWhite.png";

import { useEffect, useState } from "react";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithLogoLeft() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Membersihkan interval saat komponen tidak lagi digunakan
    return () => clearInterval(timer);
  }, []);
  return (
    <chakra.footer
      color={useColorModeValue("gray.700", "gray.200")}
      mt={50}
      mb={-10}
    >
      <Container
        as={Stack}
        maxW={"10xl"}
        pt={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <img
          src={useColorModeValue(LogoBlack, LogoWhite)}
          height="50"
          width="200"
          alt="logo"
        ></img>
        <Text>
          {currentDate.getFullYear()} Made with ❤ by Nanda Safiq Alfiansyah
        </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"https://twitter.com"}>
            <FaTwitter />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/nandasafiqalfiansyah"}
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.instagram.com/nanda_safiq_alfiansyah"}
          >
            <FaInstagram />
          </SocialButton>
          <SocialButton
            label={"Github"}
            href={"https://github.com/nandasafiqalfiansyah/groom"}
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </chakra.footer>
  );
}
