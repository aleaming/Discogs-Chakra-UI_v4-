import {
  ButtonGroup,
  Button,
  useColorModeValue,
  Tooltip,
  Box,
} from '@chakra-ui/react';
import { Grid, List, Table as TableIcon } from 'lucide-react';

export type LayoutType = 'grid' | 'row' | 'table';

interface LayoutSwitcherProps {
  currentLayout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
}

export const LayoutSwitcher = ({
  currentLayout,
  onLayoutChange,
}: LayoutSwitcherProps) => {
  const activeColor = useColorModeValue('brand.500', 'brand.300');
  const inactiveColor = useColorModeValue('gray.500', 'gray.400');
  const activeBg = useColorModeValue('gray.50', 'gray.700');

  const layouts = [
    { type: 'grid', icon: Grid, label: 'Cover View' },
    { type: 'row', icon: List, label: 'List View' },
    { type: 'table', icon: TableIcon, label: 'Table View' },
  ] as const;

  return (
    <Box>
      <ButtonGroup size="md" isAttached variant="outline" borderRadius="full">
        {layouts.map(({ type, icon: Icon, label }) => (
          <Tooltip key={type} label={label} placement="top">
            <Button
              aria-label={label}
              icon={<Icon size={16} />}
              onClick={() => onLayoutChange(type)}
              color={currentLayout === type ? activeColor : inactiveColor}
              bg={currentLayout === type ? activeBg : 'transparent'}
              borderColor="gray.50"
              _hover={{
                bg: activeBg,
                transform: 'translateY(-1px)',
              }}
              _active={{
                bg: activeBg,
                transform: 'translateY(0)',
              }}
              transition="all 0.2s"
            >
              <Icon size={16} />
            </Button>
          </Tooltip>
        ))}
      </ButtonGroup>
    </Box>
  );
};
