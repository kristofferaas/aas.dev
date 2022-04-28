import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" sx={{ my: 8 }}>
        Hi :)
      </Typography>
    </Container>
  );
};

export default Home;
