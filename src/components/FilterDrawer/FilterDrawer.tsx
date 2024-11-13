import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Select,
  Stack,
  useDisclosure,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Divider,
  Switch,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { SlidersHorizontal } from 'lucide-react';

interface FilterGroup {
  title: string;
  filters: {
    id: string;
    label: string;
    options?: string[];
    type?: 'select' | 'range' | 'switch';
  }[];
}

const filterGroups: FilterGroup[] = [
  {
    title: 'Media Details',
    filters: [
      {
        id: 'format',
        label: 'Format',
        options: ['Vinyl', 'CD', 'Cassette', 'Digital', 'Box Set'],
      },
      {
        id: 'length',
        label: 'Length',
        options: ['LP', 'EP', 'Single', 'Double LP', 'Triple LP'],
      },
      {
        id: 'size',
        label: 'Size',
        options: ['7"', '10"', '12"', '5"'],
      },
      {
        id: 'speed',
        label: 'Speed',
        options: ['33 RPM', '45 RPM', '78 RPM'],
      },
      {
        id: 'sound',
        label: 'Sound',
        options: ['Mono', 'Stereo', 'Quadraphonic'],
      },
      {
        id: 'mediaType',
        label: 'Media Type',
        options: ['Black', 'Colored', 'Picture Disc', 'Shape'],
      },
      {
        id: 'packaging',
        label: 'Packaging',
        options: ['Generic', 'Gatefold', 'Die-Cut', 'Special Edition'],
      },
    ],
  },
  {
    title: 'Content & Release',
    filters: [
      {
        id: 'contentType',
        label: 'Content Type',
        options: ['Album', 'Compilation', 'Live', 'Soundtrack'],
      },
      {
        id: 'pressingDetails',
        label: 'Pressing Details',
        options: ['First Press', 'Repress', 'Reissue', 'Limited Edition'],
      },
      {
        id: 'quantity',
        label: 'Quantity',
        options: ['1-10', '11-50', '51-100', '100+'],
      },
      {
        id: 'releaseStatus',
        label: 'Release Status',
        options: ['Official', 'Promo', 'Test Pressing', 'White Label'],
      },
      {
        id: 'appearances',
        label: 'Appearances',
        options: ['Featured', 'Guest', 'Remix', 'Production'],
      },
      {
        id: 'unofficialStatus',
        label: 'Unofficial Status',
        options: ['Bootleg', 'Counterfeit', 'Pirate', 'Unknown'],
      },
    ],
  },
  {
    title: 'Commercial Info',
    filters: [
      {
        id: 'labelCompanies',
        label: 'Label & Companies',
        options: ['Major Label', 'Independent', 'Self-Released'],
      },
      {
        id: 'country',
        label: 'Country of Origin',
        options: ['USA', 'UK', 'Japan', 'Germany', 'France'],
      },
      {
        id: 'releaseYear',
        label: 'Release Year',
        type: 'range',
      },
      {
        id: 'priceRange',
        label: 'Price Range',
        type: 'range',
      },
      {
        id: 'currency',
        label: 'Currency',
        options: ['USD', 'EUR', 'GBP', 'JPY'],
      },
      {
        id: 'shippingOrigin',
        label: 'Shipping Origin',
        options: ['Worldwide', 'North America', 'Europe', 'Asia'],
      },
    ],
  },
  {
    title: 'Condition',
    filters: [
      {
        id: 'sleeveCondition',
        label: 'Sleeve Condition',
        options: [
          'Mint',
          'Near Mint',
          'Very Good Plus',
          'Very Good',
          'Good',
          'Fair',
          'Poor',
        ],
      },
      {
        id: 'mediaCondition',
        label: 'Media Condition',
        options: [
          'Mint',
          'Near Mint',
          'Very Good Plus',
          'Very Good',
          'Good',
          'Fair',
          'Poor',
        ],
      },
    ],
  },
  {
    title: 'Seller Requirements',
    filters: [
      {
        id: 'sellerName',
        label: 'Seller Name/ID',
        options: ['Verified', 'Top Rated', 'All Sellers'],
      },
      {
        id: 'minimumRating',
        label: 'Minimum Rating',
        options: ['5 Stars', '4+ Stars', '3+ Stars'],
      },
      {
        id: 'minimumRatings',
        label: 'Minimum Number of Ratings',
        options: ['100+', '500+', '1000+', '5000+'],
      },
    ],
  },
  {
    title: 'Notifications',
    filters: [
      {
        id: 'realTimeAlerts',
        label: 'Real-time Alerts',
        type: 'switch',
      },
      {
        id: 'dailyDigest',
        label: 'Daily Digest',
        type: 'switch',
      },
    ],
  },
];

export const FilterDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<SlidersHorizontal size={20} />}
        onClick={onOpen}
        variant="outline"
        size="sm"
        borderRadius="full"
        px={6}
      >
        Filters
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="sm">
        <DrawerOverlay />
        <DrawerContent borderRadius="0 16px 16px 0" my="4" shadow="dark-lg">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Filter Results</DrawerHeader>
          <DrawerBody>
            <VStack spacing={6} align="stretch" py={4}>
              <Accordion allowMultiple defaultIndex={[0]}>
                {filterGroups.map((group, groupIndex) => (
                  <AccordionItem borderTop="none" key={group.title}>
                    <AccordionButton bgColor="gray.25">
                      <Box flex="1" textAlign="left" fontWeight="semibold">
                        {group.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <Stack spacing={4}>
                        {group.filters.map((filter) => (
                          <FormControl key={filter.id}>
                            <FormLabel fontSize="smaller">
                              {filter.label}
                            </FormLabel>
                            {filter.type === 'range' ? (
                              <Box px={2}>
                                <RangeSlider
                                  defaultValue={[0, 100]}
                                  min={0}
                                  max={100}
                                  step={1}
                                >
                                  <RangeSliderTrack>
                                    <RangeSliderFilledTrack />
                                  </RangeSliderTrack>
                                  <RangeSliderThumb index={0} />
                                  <RangeSliderThumb index={1} />
                                </RangeSlider>
                                <Text fontSize="sm" color="gray.600" mt={2}>
                                  {filter.id === 'releaseYear'
                                    ? '1950 - 2024'
                                    : '$0 - $1000'}
                                </Text>
                              </Box>
                            ) : filter.type === 'switch' ? (
                              <Switch colorScheme="brand" />
                            ) : (
                              <Select placeholder={`Select ${filter.label}`}>
                                {filter.options?.map((option) => (
                                  <option key={option} value={option}>
                                    {option}
                                  </option>
                                ))}
                              </Select>
                            )}
                          </FormControl>
                        ))}
                      </Stack>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
