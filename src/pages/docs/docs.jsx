import React from 'react';
import {
  Box,
  Flex,
  VStack,
  Heading,
  Text,
  useColorModeValue,
  Code,
  Divider,
} from '@chakra-ui/react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { COLORS } from '../../colors';

const DocsPage = () => {
  return (
    <Box px={{ base: 4, md: 8 }}
    py={5}
    mx="auto"
    pb={20}
    backgroundColor={useColorModeValue(COLORS.white, COLORS.dark)}>
    <Navbar />
    <Flex direction={{ base: "column", md: "row" }} h={{ md: "100vh" }} overflow="hidden" pt={5}>
      <Box
        w={{ base: "100%", md: "20%" }}
        bg={useColorModeValue('gray.100', 'gray.900')}
        p={4}
        color={useColorModeValue('gray.900', 'gray.100')}
        overflowY="auto"
      >
        <VStack align="start" spacing={4}>
          <Heading size="md">Dokumentasi</Heading>
          <Text cursor="pointer">Pengenalan</Text>
          <Text cursor="pointer">Penggunaan</Text>
          <Text cursor="pointer">API</Text>
          <Text cursor="pointer">Contoh</Text>
        </VStack>
      </Box>
      <Box
        w={{ base: "100%", md: "80%" }}
        p={4}
        bg={useColorModeValue('gray.50', 'gray.800')}
        color={useColorModeValue('gray.900', 'gray.100')}
        overflowY="auto"
      >
        <Heading mb={4}>Selamat Datang di Dokumentasi</Heading>
        <Text mb={4}>
          Di sini Anda akan menemukan semua informasi yang diperlukan untuk memulai dan menggunakan produk kami secara efektif.
        </Text>
        <Divider my={4} />
        <Heading size="lg" mb={2}>Contoh Kode</Heading>
        <Code p={4} children={`<Box bg='tomato' w='100%' p={4} color='white'>This is the Box</Box>`} />
        <Text mt={4}>
          Gunakan komponen Box untuk mengelilingi elemen lain dan menerapkan styling.
        </Text>
      </Box>
    </Flex>
    <Footer />
    </Box>
  );
};

export default DocsPage;

