import Head from "next/head";
import { useColorMode, Heading, Text, Flex, Stack } from "@chakra-ui/react";
import Container from "../components/Container";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  return (
    <Container>
      <Head>
        <title>Home - Zahid Karakaya</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, I'm Zahid</Heading>
          <Text color={colorSecondary[colorMode]}>
            I am a frontend developer based in Turkey. I have over 3 years of
            experience designing and developing for small-scale start-ups to
            large scale companies. I have been a designer, a SEO specialist and
            a developer; all of these things combined help me understand the
            goals of the code I am building. Advanced knowledge of HTML and CSS,
            framework usage and experience, React functional components with
            Hooks & CSS-in-JS, API and JavaScript - with attention to detail,
            and code best practices/standards.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
