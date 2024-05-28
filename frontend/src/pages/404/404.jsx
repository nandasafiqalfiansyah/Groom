import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Text fontSize="5xl" fontWeight="bold" color="red.500">
        404
      </Text>
      <Text fontSize="xl" mt={3} mb={2}>
        Halaman yang Anda cari tidak ditemukan.
      </Text>
      <Text color="gray.500" mb={6}>
        Alamat URL yang Anda masukkan mungkin salah atau halaman mungkin telah dipindahkan.
      </Text>

      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid"
        as={Link}
        to="/"
      >
        Kembali ke Beranda
      </Button>
    </Box>
  );
};

export default NotFound;
