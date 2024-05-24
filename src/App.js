import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box, useColorModeValue, Spinner, Center } from "@chakra-ui/react";
import { COLORS } from "./colors";
import Home from "../src/pages/Home/home";
import Room from "../src/pages/Room/GroomAiComponent";
const Loader = () => {
  return (
    <Center width="100%" height="100vh">
      <Box
        px={8}
        py={5}
        mx="auto"
        pb={20}
        backgroundColor={useColorModeValue(COLORS.white, COLORS.dark)}
      >
        <Spinner
          size="xl"
          color={useColorModeValue(COLORS.dark, COLORS.white)}
        />
      </Box>
    </Center>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/room/:slug" element={<Room />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
