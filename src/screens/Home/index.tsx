/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from "@material-ui/core";
import React, { useEffect } from "react";

const Home: React.FC = () => {

  useEffect(() => {
  }, []);

  return (
    <Box marginTop="20px">
      <Typography variant="h3" align="center">
        CoreSystem
      </Typography>
    </Box>
  );
};

export default Home;
