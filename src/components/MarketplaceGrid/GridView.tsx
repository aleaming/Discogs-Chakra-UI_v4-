import {
  SimpleGrid,
  Box,
  Image,
  Text,
  VStack,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  Button,
  useColorModeValue,
  Flex,
  Spacer,
  Link,
} from '@chakra-ui/react';
import { Heart, Share2, MoreHorizontal, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import type { MarketplaceItem } from './MarketplaceGridView';

interface GridViewProps {
  items: MarketplaceItem[];
  onViewDetails: (item: MarketplaceItem) => void;
}

export const GridView = ({ items, onViewDetails }: GridViewProps) => {
  const { dispatch } = useCart();
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const mutedColor = useColorModeValue('gray.600', 'gray.400');

  const getFormatString = (format: MarketplaceItem['format']) => {
    const details = [...format.details];
    if (format.weight) details.push(format.weight);
    if (format.speed) details.push(format.speed);
    return `${format.type}, ${details.join(', ')}`;
  };

  const handleAddToCart = (item: MarketplaceItem, e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: item });
  };

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
      {items.map((item) => (
        <Box
          key={item.id}
          borderRadius="lg"
          overflow="hidden"
          bg={cardBg}
          boxShadow="lg"
          transition="all 0.2s"
          _hover={{ transform: 'translateY(-4px)' }}
          borderWidth="1px"
          borderColor="gray.50"
          onClick={() => onViewDetails(item)}
          cursor="pointer"
        >
          <Box position="relative">
            <Image
              src={item.image}
              alt={item.title}
              width="100%"
              height="auto"
              aspectRatio={1}
              objectFit="cover"
            />
            <HStack position="absolute" top={2} right={2} spacing={2}>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="More options"
                  icon={<MoreHorizontal size={24} />}
                  size="sm"
                  variant="solid"
                  isRound
                  bg="gray.500"
                  onClick={(e) => e.stopPropagation()}
                />
                <MenuList onClick={(e) => e.stopPropagation()}>
                  <MenuItem icon={<Share2 size={16} />}>Share</MenuItem>
                  <MenuItem>Add to List</MenuItem>
                  <MenuItem>Contact Seller</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>

          <VStack p={4} align="stretch" spacing={2}>
            <VStack align="start" spacing={0}>
              <Text fontSize="lg" fontWeight="bold" color={textColor}>
                {item.title}
              </Text>
              <Link color="brand.500" fontWeight="bold">
                {item.artist}
              </Link>
              <Text fontSize="sm" color={mutedColor}>
                {getFormatString(item.format)}
              </Text>
            </VStack>

            <HStack>
              <Badge colorScheme="green">Media: {item.condition.media}</Badge>
              <Badge colorScheme="blue">Sleeve: {item.condition.sleeve}</Badge>
            </HStack>

            <VStack align="start" spacing={0}>
              <Text fontSize="sm" color={mutedColor}>
                Seller: {item.seller.name}
              </Text>
              <Text fontSize="sm" color={mutedColor}>
                Rating: {item.seller.rating}★ ({item.seller.totalRatings})
              </Text>
            </VStack>

            <Flex align="center">
              <Text fontSize="2xl" fontWeight="bold" color="brand.500" mr="2">
                ${item.price}
              </Text>

              <Text fontSize="sm" color={mutedColor}>
                +${item.shipping.cost} shipping
              </Text>
            </Flex>

            <HStack spacing="0" mt="auto">
              <Button
                leftIcon={<ShoppingCart size={16} />}
                colorScheme="brand"
                borderRadius="40px 0 0 40px"
                flex={1}
                onClick={(e) => handleAddToCart(item, e)}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                colorScheme="brand"
                borderRadius="0 40px 40px 0"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(item);
                }}
              >
                Details
              </Button>
            </HStack>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  );
};