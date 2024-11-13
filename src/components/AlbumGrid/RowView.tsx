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
} from '@chakra-ui/react';
import { Heart, MoreHorizontal, Share2 } from 'lucide-react';
import { Album } from '../../data/discography';

interface RowViewProps {
  albums: Album[];
  onViewVersions: (album: Album) => void;
}

export const RowView = ({ albums, onViewVersions }: RowViewProps) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <VStack spacing={2} align="stretch">
      {albums.map((album) => (
        <Box
          key={album.id}
          borderWidth="1px"
          borderColor={borderColor}
          borderRadius="lg"
          p={2}
          _hover={{ bg: hoverBg }}
          transition="all 0.2s"
        >
          <HStack spacing={6}>
            <Image
              src={album.artwork}
              alt={album.title}
              boxSize="100px"
              objectFit="cover"
              borderRadius="md"
            />
            <VStack align="start" flex={1} spacing={2}>
              <Text fontSize="xl" fontWeight="bold">
                {album.title}
              </Text>
              <HStack spacing={4}>
                <Text color="gray.500">{album.releaseYear}</Text>
                <Badge colorScheme="purple">{album.versions} versions</Badge>
                <Badge colorScheme="green">
                  Rating: {album.rating.toFixed(1)}
                </Badge>
              </HStack>
              <Text color="gray.600" fontSize="sm">
                Formats: {album.formats.join(', ')}
              </Text>
            </VStack>
            <HStack spacing={2}>
              <Button
                size="sm"
                colorScheme="brand"
                onClick={() => onViewVersions(album)}
              >
                View Versions
              </Button>
              <IconButton
                aria-label="Add to wantlist"
                icon={<Heart size={16} />}
                size="sm"
                variant="ghost"
              />
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="More options"
                  icon={<MoreHorizontal size={16} />}
                  size="sm"
                  variant="ghost"
                />
                <MenuList>
                  <MenuItem icon={<Share2 size={16} />}>Share</MenuItem>
                  <MenuItem>Add to List</MenuItem>
                  <MenuItem>View Details</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </Box>
      ))}
    </VStack>
  );
};
