import {
  ChakraProvider,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Text,
  Flex,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Wrap,
  WrapItem,
  HStack,
} from '@chakra-ui/react';
import ReleaseAlbumBlock from './components/ReleaseAlbumBlock';
import MarketplaceAlbumBlock from './components/MarketplaceAlbumBlock';
import { ArtistHero } from './components/ArtistHero';
import { Navigation } from './components/Navigation';
import { FilterDrawer } from './components/FilterDrawer';
import MarketplaceResults from './components/MarketplaceResults';
import { DiscographyGridView } from './components/AlbumGrid';
import { ListsGrid } from './components/Lists';
import { CartProvider } from './contexts/CartContext';
import { ReviewsGrid } from './components/Reviews';
import { VideosGrid } from './components/Videos';
import { TourGrid } from './components/Tour';
import { discography } from './data/discography';
import theme from './theme';
import { useState } from 'react';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isShopTabActive, setIsShopTabActive] = useState(false);

  const artistData = {
    name: 'Daft Punk',
    image:
      'https://i.discogs.com/sP_wDoC5MsG9lZUfb9thLbpmMmL__nuVnGMNpwgjirE/rs:fit/g:sm/q:90/h:438/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyODkt/MTYxNTQ4NDUyOS00/Mjg0LmpwZWc.jpeg',
    coverImage:
      'https://i.discogs.com/05Lpu5qKFGNpuIqA1fztJdlAyiciD7P_63QJtxhdliw/rs:fit/g:sm/q:90/h:382/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyODkt/MTYyMDQ3MTUxMS0z/NDIwLmpwZWc.jpeg',
    monthlyListeners: 1234567,
    genres: ['Electronic', 'Contemporary', 'Orchestral', 'Ambient'],
    description:
      "Daft Punk were a French electronic music duo formed in 1993 by Thomas Bangalter (born January 3, 1975) and Guy-Manuel de Homem-Christo (born February 8, 1974). Bangalter and de Homem-Christo were previously in the rock band Darlin' with Laurent Brancowitz. After Brancowitz left the group to join his brother's band, Phoenix, the remaining duo formed Daft Punk. On February 22, 2021, it was announced that they had disbanded for unknown reasons.",
    isVerified: true,
  };

  const handleTabChange = (index: number) => {
    setSelectedTab(index);
    if (index === 6) {
      setIsShopTabActive(true);
      setTimeout(() => setIsShopTabActive(false), 200);
    }
  };

  // Convert discography items to ReleaseAlbumBlock format
  const releaseAlbums = discography.map(album => ({
    title: album.title,
    artist: 'Daft Punk',
    price: album.versionsList[0]?.price?.replace('$', '') || '0.00',
    image: album.artwork,
    label: album.versionsList[0]?.label,
    releaseYear: album.releaseYear
  }));

  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
        <Navigation />

        <VStack spacing={0} w="full">
          <Wrap w="full" bg="gray.25" py="4">
            <Container maxW="container.xl">
              <Breadcrumb fontWeight="medium" fontSize="sm">
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <BreadcrumbLink href="#">About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href="#">Current</BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Container>
          </Wrap>
          <ArtistHero
            {...artistData}
            onPlay={() => console.log('Play clicked')}
            onFollow={() => console.log('Follow clicked')}
            onShare={() => console.log('Share clicked')}
            isCompact={selectedTab !== 0}
            selectedTab={selectedTab}
          />
        </VStack>

        <Tabs
          variant="enclosed"
          width="full"
          px={4}
          onChange={handleTabChange}
          index={selectedTab}
        >
          <Container maxW="container.xl" px={4}>
            <TabList
              overflowX={{ base: 'scroll', md: 'auto' }}
              whiteSpace={{ base: 'nowrap', md: 'normal' }}
              display="flex"
              gap={2}
            >
              <Tab>Featured</Tab>
              <Tab>Discography</Tab>
              <Tab>Reviews</Tab>
              <Tab>Videos</Tab>
              <Tab>Lists</Tab>
              <Tab>Tour</Tab>
              <Spacer />
              <Tab
                bg="teal.500"
                color="white"
                _hover={{
                  background: 'gray.800',
                  color: 'white',
                }}
                transform={isShopTabActive ? 'scale(0.95)' : 'scale(1)'}
                transition="transform 0.2s"
              >
                Shop All Daft Punk
              </Tab>
            </TabList>
          </Container>
          <TabPanels>
            <TabPanel
              _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
              _light={{ bg: 'white' }}
            >
              <Container maxW="container.xl" py={4} px="0">
                <VStack w="full" spacing={4} align="start">
                  <Heading size="md" color="gray.800">
                    Most Collected Albums
                  </Heading>
                  <SimpleGrid
                    columns={{ base: 1, md: 3, lg: 4 }}
                    spacing={6}
                    w="full"
                  >
                    {releaseAlbums.slice(0, 8).map((album, index) => (
                      <ReleaseAlbumBlock key={index} {...album} />
                    ))}
                  </SimpleGrid>
                </VStack>

                <Divider my={8} />
              </Container>
            </TabPanel>

            <TabPanel
              _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
              _light={{ bg: 'white' }}
            >
              <Container maxW="container.xl" py={4} px="0">
                <DiscographyGridView />
              </Container>
            </TabPanel>

            <TabPanel
              _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
              _light={{ bg: 'white' }}
            >
              <ReviewsGrid />
            </TabPanel>

            <TabPanel
              _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
              _light={{ bg: 'white' }}
            >
              <VideosGrid />
            </TabPanel>

            <TabPanel
              _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
              _light={{ bg: 'white' }}
            >
              <Container maxW="container.xl" py={4} px="0">
                <ListsGrid />
              </Container>
            </TabPanel>

            <TabPanel
              _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
              _light={{ bg: 'white' }}
            >
              <TourGrid />
            </TabPanel>

            <TabPanel
              _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
              _light={{ bg: 'white' }}
            >
              <Container maxW="container.xl" py={4} px="0">
                <MarketplaceResults />
              </Container>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </CartProvider>
    </ChakraProvider>
  );
};

export default App;