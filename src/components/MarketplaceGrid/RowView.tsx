import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Badge,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { Heart, Share2, MoreHorizontal, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import type { MarketplaceItem } from './MarketplaceGridView';

interface RowViewProps {
  items: MarketplaceItem[];
  onViewDetails: (item: MarketplaceItem) => void;
}

export const RowView = ({ items, onViewDetails }: RowViewProps) => {
  const { dispatch } = useCart();
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
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
    <VStack spacing={4} align="stretch">
      {items.map((item) => (
        <Box
          key={item.id}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="lg"
          p={4}
          _hover={{ bg: hoverBg }}
          transition="all 0.2s"
          cursor="pointer"
          onClick={() => onViewDetails(item)}
        >
          <HStack spacing={6} align="start">
            <Image
              src={item.image}
              alt={item.title}
              boxSize="128px"
              objectFit="cover"
              borderRadius="md"
            />
            <HStack align="start" flex={1} spacing={3}>
              <VStack align="start" spacing={0}>
                <Text fontSize="xl" fontWeight="bold">
                  {item.title}
                </Text>
                <Link color="brand.500" fontWeight="medium">
                  {item.artist}
                </Link>
                <Text fontSize="sm" color={mutedColor}>
                  {getFormatString(item.format)}
                </Text>
              </VStack>
              <VStack align="start" spacing={1}>
                <HStack spacing={2}>
                  <Badge colorScheme="green">
                    Media: {item.condition.media}
                  </Badge>
                  <Badge colorScheme="blue">
                    Sleeve: {item.condition.sleeve}
                  </Badge>
                </HStack>

                <Text fontSize="xs" color="gray.600">
                  Seller: {item.seller.name} • {item.seller.rating}★ (
                  {item.seller.totalRatings})
                </Text>
              </VStack>
              <HStack spacing={4}>
                <Text fontSize="xl" fontWeight="bold" color="brand.500">
                  ${item.price}
                </Text>
                <Text fontSize="sm" color="gray.600">
                  +${item.shipping.cost} shipping from {item.shipping.from}
                </Text>
              </HStack>
            </HStack>

            <VStack spacing={2} minW="200px">
              <Button
                leftIcon={<ShoppingCart size={16} />}
                colorScheme="brand"
                width="full"
                onClick={(e) => handleAddToCart(item, e)}
              >
                Add to Cart
              </Button>
              <Button
                variant="outline"
                colorScheme="brand"
                width="full"
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(item);
                }}
              >
                View Details
              </Button>
              <HStack>
                <IconButton
                  aria-label="Add to wantlist"
                  icon={<Heart size={16} />}
                  variant="ghost"
                  onClick={(e) => e.stopPropagation()}
                />
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="More options"
                    icon={<MoreHorizontal size={16} />}
                    variant="ghost"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <MenuList onClick={(e) => e.stopPropagation()}>
                    <MenuItem icon={<Share2 size={16} />}>Share</MenuItem>
                    <MenuItem>Add to List</MenuItem>
                    <MenuItem>Contact Seller</MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};