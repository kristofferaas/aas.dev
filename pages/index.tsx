import Avatar from "boring-avatars";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback } from "react";
import styled from "styled-components";
import Page from "../components/Page";
import Palette from "../components/Palette";
import useTheme from "../lib/useTheme";

const Box = styled.div`
  display: flex;
`;

const Home: NextPage = () => {
  const [theme, setNonce] = useTheme();

  const handleClick = useCallback(() => {
    const nonce = Math.round(Math.random() * 100);
    setNonce(nonce);
  }, []);

  return (
    <Page>
      <Head>
        <title>aas.dev</title>
        <meta name="description" content="aas.dev" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Box onClick={handleClick}>
        <Avatar
          size={180}
          name="aas.dev"
          variant="marble"
          colors={theme.palette}
        />
      </Box>
      <Palette />
    </Page>
  );
};

export default Home;
