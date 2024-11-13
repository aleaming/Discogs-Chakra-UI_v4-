import {
  VStack,
  HStack,
  Text,
  Button,
  Divider,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { CartItem } from './CartItem';

interface SellerCartSectionProps {
  sellerId: string;
  sellerCart: {
    items: any[];
    seller: {
      name: string;
      rating: number;
      totalRatings: number;
    };
    shipping: {
      cost: string;
      from: string;
    };
  };
}

export const SellerCartSection = ({
  sellerId,
  sellerCart,
}: SellerCartSectionProps) => {
  const { dispatch } = useCart();
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const calculateSubtotal = () => {
    return sellerCart.items.reduce(
      (sum, item) => sum + parseFloat(item.price) * item.quantity,
      0
    );
  };

  const handleClearSellerCart = () => {
    dispatch({ type: 'CLEAR_SELLER_CART', payload: { sellerId } });
  };

  return (
    <Box borderWidth="1px" borderColor={borderColor} borderRadius="lg" p={4}>
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <VStack align="start" spacing={0}>
            <Text fontWeight="bold">{sellerCart.seller.name}</Text>
            <Text fontSize="sm" color="gray.500">
              {sellerCart.seller.rating}★ ({sellerCart.seller.totalRatings}{' '}
              ratings)
            </Text>
          </VStack>
          <Button
            leftIcon={<Trash2 size={16} />}
            variant="ghost"
            colorScheme="red"
            size="sm"
            onClick={handleClearSellerCart}
          >
            Clear
          </Button>
        </HStack>

        <Divider />

        <VStack spacing={4} align="stretch">
          {sellerCart.items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              sellerId={sellerId}
            />
          ))}
        </VStack>

        <Divider />

        <VStack spacing={2} align="stretch">
          <HStack justify="space-between">
            <Text>Subtotal:</Text>
            <Text>${calculateSubtotal().toFixed(2)}</Text>
          </HStack>
          <HStack justify="space-between">
            <Text>Shipping:</Text>
            <Text>${sellerCart.shipping.cost}</Text>
          </HStack>
          <HStack justify="space-between" fontWeight="bold">
            <Text>Total:</Text>
            <Text>
              ${(calculateSubtotal() + parseFloat(sellerCart.shipping.cost)).toFixed(2)}
            </Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};