import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Stack, Text, VStack, Input } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRating = ({ rating, onRate }) => {
  const [hover, setHover] = useState(null);

  return (
    <Flex>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <Box
            as="label"
            key={index}
            cursor="pointer"
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onRate(ratingValue)}
          >
            <Input
              type="radio"
              name="rating"
              value={ratingValue}
              style={{ display: "none" }}
            />
            <FaStar
              size={24}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

const recipes = [
  {
    title: "Spaghetti Carbonara",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    image: "https://via.placeholder.com/150",
    rating: 4
  },
  {
    title: "Chicken Tikka Masala",
    description: "A popular Indian curry dish made with roasted marinated chicken chunks in spiced curry sauce.",
    image: "https://via.placeholder.com/150",
    rating: 5
  },
  {
    title: "Chocolate Cake",
    description: "A rich and moist chocolate cake perfect for any occasion.",
    image: "https://via.placeholder.com/150",
    rating: 3
  }
];

const handleRating = (index, rating) => {
  const updatedRecipes = [...recipes];
  updatedRecipes[index].rating = rating;
  // Here you would normally update the rating in the backend
  console.log(`Recipe ${index + 1} rated with ${rating} stars`);
};

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="teal.500" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">Recipe Sharing</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">Recipes</Link>
          <Link href="/submit-recipe">Submit a Recipe</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.100" padding={10} textAlign="center">
        <Heading>Welcome to Recipe Sharing</Heading>
        <Text fontSize="lg" marginTop={4}>Discover and share amazing recipes from around the world.</Text>
        <Button as={Link} href="/submit-recipe" colorScheme="teal" size="lg" marginTop={6}>Submit a Recipe</Button>
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
                <StarRating rating={recipe.rating} onRate={(rating) => handleRating(index, rating)} />
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