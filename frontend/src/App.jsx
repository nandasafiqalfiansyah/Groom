import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box, useColorModeValue, Spinner, Center } from "@chakra-ui/react";
import { COLORS } from "./colors";
import Home from "./pages/Home/home";
import NotFound from "./pages/404/404";
import DocPage from "./pages/docs/docs";
import MainEditorPage from "./pages/Room/Home";
import EditorPage from "./pages/Room/EditorPage";
import "./App.css";

import "./index.css";
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
          <Route path="/docs" element={<DocPage />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/room" element={<MainEditorPage />} />
          <Route path="/room/editor/:roomId" element={<EditorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
