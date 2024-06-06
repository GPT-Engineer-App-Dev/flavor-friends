import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Chicken Tikka Masala",
    description: "A popular Indian curry dish made with roasted marinated chicken chunks in spiced curry sauce.",
    image: "https://via.placeholder.com/150"
  },
  {
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake perfect for any occasion.",
    image: "https://via.placeholder.com/150"
  }
];

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="teal.500" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Recipe Sharing</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Recipes</Link>
          <Link href="#">Submit a Recipe</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" padding={10} textAlign="center">
        <Heading>Welcome to Recipe Sharing</Heading>
        <Text fontSize="lg" marginTop={4}>Discover and share amazing recipes from around the world.</Text>
        <Button colorScheme="teal" size="lg" marginTop={6}>Submit a Recipe</Button>
      </Box>

      {/* Recipes Section */}
      <Container maxW="container.lg" marginTop={10}>
        <Heading size="lg" marginBottom={6}>Our Recipes</Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          {recipes.map((recipe, index) => (
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" width="300px" marginBottom={6}>
              <Image src={recipe.image} alt={recipe.title} />
              <Box padding={6}>
                <Heading size="md">{recipe.title}</Heading>
                <Text marginTop={4}>{recipe.description}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>

      {/* Footer */}
      <Box bg="teal.500" color="white" padding={10} marginTop={10}>
        <Container maxW="container.lg">
          <Flex justifyContent="space-between" alignItems="center">
            <Text>&copy; 2023 Recipe Sharing. All rights reserved.</Text>
            <HStack spacing={4}>
              <Link href="#"><FaFacebook size="24px" /></Link>
              <Link href="#"><FaTwitter size="24px" /></Link>
              <Link href="#"><FaInstagram size="24px" /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;