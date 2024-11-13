import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  Divider,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { MarketStats } from './MarketStats';
import type { AlbumDetailsModalProps } from './types';
import { MoreVertical, Library, Zap, List, DollarSign, Heart } from 'lucide-react';

export const AlbumDetailsModal = ({ isOpen, onClose, album }: AlbumDetailsModalProps) => {
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl" scrollBehavior="inside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader p={0}>
          <Box p={6}>
            <HStack spacing={6} align="start">
              <Image
                src={album.image}
                alt={album.title}
                boxSize="120px"
                objectFit="cover"
                borderRadius="md"
              />
              <VStack align="start" spacing={2} flex={1}>
                <Text fontSize="2xl" fontWeight="bold">
                  {album.title}
                </Text>
                <Text fontSize="lg" color="brand.500">
                  {album.artist}
                </Text>
                <HStack spacing={4}>
                  <Text color="gray.600">
                    Released: {album.releaseYear}
                  </Text>
                  <Text color="gray.600">
                    Label: {album.label}
                  </Text>
                </HStack>
                {album.condition && (
                  <HStack spacing={2}>
                    <Badge variant="mint">
                      Media: {album.condition.media}
                    </Badge>
                    <Badge variant="nearMint">
                      Sleeve: {album.condition.sleeve}
                    </Badge>
                  </HStack>
                )}
                <HStack spacing="2" pt={2}>
                  <Button size="sm" colorScheme="brand" flex={1}>
                    Shop
                  </Button>
                  <Button size="sm" variant="outline" colorScheme="brand" flex={1}>
                    View
                  </Button>
                  <Menu>
                    <MenuButton
                      as={Button}
                      size="sm"
                      variant="outline"
                      colorScheme="brand"
                    >
                      <MoreVertical size={16} />
                    </MenuButton>
                    <MenuList>
                      <MenuItem icon={<Library size={16} />}>
                        Add to Collection
                      </MenuItem>
                      <MenuItem icon={<Zap size={16} />}>Add to Wantlist</MenuItem>
                      <MenuItem icon={<List size={16} />}>Add to List</MenuItem>
                      <MenuItem icon={<DollarSign size={16} />}>Sell a copy</MenuItem>
                      <MenuItem icon={<Heart size={16} />}>Follow artist</MenuItem>
                    </MenuList>
                  </Menu>
                </HStack>
              </VStack>
            </HStack>
          </Box>
          <Divider borderColor={borderColor} />
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody p={6}>
          <Tabs>
            <TabList mb={4}>
              <Tab>Market Statistics</Tab>
              <Tab>Release Details</Tab>
              <Tab>Reviews</Tab>
            </TabList>

            <TabPanels>
              <TabPanel p={0}>
                <MarketStats stats={album.marketStats} />
              </TabPanel>
              <TabPanel>
                <VStack align="start" spacing={4}>
                  <Box>
                    <Text fontWeight="bold" mb={2}>Format</Text>
                    <Text>{album.format}</Text>
                  </Box>
                  <Box>
                    <Text fontWeight="bold" mb={2}>Release Information</Text>
                    <Text>More details about the release...</Text>
                  </Box>
                </VStack>
              </TabPanel>
              <TabPanel>
                <Text>Reviews and ratings will be displayed here...</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};