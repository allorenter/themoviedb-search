import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import { IconSun, IconMoon } from '@/icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      onClick={() => toggleColorScheme()}
      size='lg'
      sx={(theme) => ({
        height: 40,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        stroke: colorScheme === 'dark' ? 'white' : 'black',
      })}
    >
      {colorScheme === 'dark' ? (
        <IconSun width='18px' height='18px' />
      ) : (
        <IconMoon width='18px' height='18px' />
      )}
    </ActionIcon>
  );
}

export default ColorSchemeToggle;
