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
  Select,
  Tooltip,
} from '@chakra-ui/react';
import { Star, Heart, Share2, MoreHorizontal } from 'lucide-react';
import { Album } from '../../data/discography';

interface GridViewProps {
  albums: Album[];
  onViewVersions: (album: Album) => void;
}

export const GridView = ({ albums, onViewVersions }: GridViewProps) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const mutedColor = useColorModeValue('gray.600', 'gray.400');

  const renderStars = (rating: number) => {
    return (
      <HStack spacing={1}>
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < Math.floor(rating) ? '#F6E05E' : 'none'}
            color={i < Math.floor(rating) ? '#F6E05E' : mutedColor}
          />
        ))}
        <Text fontSize="sm" color={mutedColor} ml={1}>
          {rating.toFixed(1)}
        </Text>
      </HStack>
    );
  };

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
      {albums.map((album) => (
        <Box
          key={album.id}
          borderRadius="lg"
          overflow="hidden"
          bg={cardBg}
          boxShadow="lg"
          transition="all 0.2s"
          _hover={{ transform: 'translateY(-4px)' }}
        >
          <Box position="relative">
            <Image
              src={album.artwork}
              alt={album.title}
              width="100%"
              height="auto"
              aspectRatio={1}
              objectFit="cover"
            />
            <HStack position="absolute" top={2} right={2} spacing={2}>
              <Tooltip label="Add to Wantlist">
                <IconButton
                  aria-label="Add to wantlist"
                  icon={<Heart size={18} />}
                  size="sm"
                  colorScheme="pink"
                  variant="solid"
                  isRound
                />
              </Tooltip>
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="More options"
                  icon={<MoreHorizontal size={18} />}
                  size="sm"
                  variant="solid"
                  isRound
                />
                <MenuList>
                  <MenuItem icon={<Share2 size={16} />}>Share</MenuItem>
                  <MenuItem>Add to List</MenuItem>
                  <MenuItem>View Details</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Box>

          <VStack p={4} align="stretch" spacing={3}>
            <VStack align="start" spacing={1}>
              <Text fontSize="xl" fontWeight="bold" color={textColor}>
                {album.title}
              </Text>
              <Text fontSize="sm" color={mutedColor}>
                Released in {album.releaseYear}
              </Text>
            </VStack>

            <HStack>
              <Badge colorScheme="gray">{album.versions} versions</Badge>
              {renderStars(album.rating)}
            </HStack>

            <Select
              borderColor="gray.50"
              size="sm"
              placeholder="Select version"
              variant="outline"
            >
              {album.formats.map((format) => (
                <option key={format} value={format}>
                  {format}
                </option>
              ))}
            </Select>

            <Flex>
              <Button
                size="sm"
                width="full"
                marginRight="3"
                colorScheme="brand"
                onClick={() => onViewVersions(album)}
              >
                View All Versions
              </Button>
              <Spacer />
              <Button size="sm" variant="outline" colorScheme="brand">
                Compare
              </Button>
            </Flex>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  );
};
