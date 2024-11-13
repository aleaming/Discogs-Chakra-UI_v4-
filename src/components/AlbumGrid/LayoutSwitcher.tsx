import { ButtonGroup, Button, useColorModeValue } from '@chakra-ui/react';
import { Grid, List, Table as TableIcon } from 'lucide-react';

export type LayoutType = 'grid' | 'row' | 'table';

interface LayoutSwitcherProps {
  currentLayout: LayoutType;
  onLayoutChange: (layout: LayoutType) => void;
}

export const LayoutSwitcher = ({ currentLayout, onLayoutChange }: LayoutSwitcherProps) => {
  const activeColor = useColorModeValue('brand.500', 'brand.300');
  const inactiveColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <ButtonGroup size="sm" isAttached variant="outline">
      <Button
        leftIcon={<Grid size={16} />}
        onClick={() => onLayoutChange('grid')}
        color={currentLayout === 'grid' ? activeColor : inactiveColor}
        borderColor={currentLayout === 'grid' ? activeColor : 'gray.200'}
      >
        Grid
      </Button>
      <Button
        leftIcon={<List size={16} />}
        onClick={() => onLayoutChange('row')}
        color={currentLayout === 'row' ? activeColor : inactiveColor}
        borderColor={currentLayout === 'row' ? activeColor : 'gray.200'}
      >
        Row
      </Button>
      <Button
        leftIcon={<TableIcon size={16} />}
        onClick={() => onLayoutChange('table')}
        color={currentLayout === 'table' ? activeColor : inactiveColor}
        borderColor={currentLayout === 'table' ? activeColor : 'gray.200'}
      >
        Table
      </Button>
    </ButtonGroup>
  );
};