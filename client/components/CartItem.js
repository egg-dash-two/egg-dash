import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
export default function CartItem(props) {
  const { quantity, product, id, price, description, removeCartItem, updateCart, state } = props;


  return (
    <Box>
      <Flex justify="space-between">
        <Text>{quantity}x</Text>
        <Text>{product}</Text>
        <Text>${price}</Text>
      </Flex>
      <Flex justify="center">
        <Text fontSize="xs">
          {description}
        </Text>
      </Flex>
      <div className="space"></div>
      <Button colorScheme="teal" size="xs" onClick={() => {
        console.log(product);
        plusOneCartItem(id)
      }}>
        Add One
      </Button>
      <Button colorScheme="teal" size="xs" onClick={() => {
        console.log(product);
        deleteOneCartItem(id)
      }}>
        Remove One
      </Button>
      <Button colorScheme="red" size="xs" onClick={() => {
        console.log('DELETE product', state.user.id, id, product);
        updateCart(state.user.id, id, 0)
      }}>
        Delete
      </Button>
      <div className="space"></div>
      <div className="space"></div>
      <hr />
    </Box>
  );
}
