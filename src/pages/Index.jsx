import { Box, Container, Heading, VStack, Text, SimpleGrid, GridItem, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center" mb={8}>
          Financial News
        </Heading>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Headlines
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md" mb={2}>
                  Headline 1
                </Heading>
                <Text>Summary of the headline 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md" mb={2}>
                  Headline 2
                </Heading>
                <Text>Summary of the headline 2...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Market Data
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md" mb={2}>
                  Market 1
                </Heading>
                <Text>Details of market 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md" mb={2}>
                  Market 2
                </Heading>
                <Text>Details of market 2...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h3" size="md" mb={2}>
                  Market 3
                </Heading>
                <Text>Details of market 3...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Featured Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Image src="/path/to/image1.jpg" alt="Featured article 1" mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  Featured Article 1
                </Heading>
                <Text>Summary of the featured article 1...</Text>
              </Box>
            </GridItem>
            <GridItem>
              <Box p={4} borderWidth="1px" borderRadius="lg">
                <Image src="/path/to/image2.jpg" alt="Featured article 2" mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  Featured Article 2
                </Heading>
                <Text>Summary of the featured article 2...</Text>
              </Box>
            </GridItem>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;