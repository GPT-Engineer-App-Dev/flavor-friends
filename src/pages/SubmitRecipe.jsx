import { useState } from "react";
import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Textarea, Image, VStack, Text } from "@chakra-ui/react";

const SubmitRecipe = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally handle the form submission, e.g., send the data to a server
    setSubmitted(true);
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container maxW="container.md" mt={10}>
      <Heading as="h1" size="xl" textAlign="center" mb={6}>Submit a Recipe</Heading>
      {submitted ? (
        <Box textAlign="center">
          <Text fontSize="lg" color="teal.500">Thank you for your submission!</Text>
        </Box>
      ) : (
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="title" isRequired>
              <FormLabel>Recipe Title</FormLabel>
              <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl id="ingredients" isRequired>
              <FormLabel>Ingredients</FormLabel>
              <Textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </FormControl>
            <FormControl id="instructions" isRequired>
              <FormLabel>Instructions</FormLabel>
              <Textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Upload Image</FormLabel>
              <Input type="file" accept="image/*" onChange={handleImageChange} />
              {image && <Image src={image} alt="Recipe Image" mt={4} />}
            </FormControl>
            <Button colorScheme="teal" type="submit">Submit</Button>
          </VStack>
        </form>
      )}
    </Container>
  );
};

export default SubmitRecipe;