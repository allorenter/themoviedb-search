import { Header as MantineHeader, NavLink, Group, Box, Container, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import ColorSchemeToggle from './ColorSchemeToggle';
import MyListLink from './MyListLink';

function Header() {
  return (
    <MantineHeader height={70} p='md'>
      <Container size={'xl'}>
        <Box
          sx={() => ({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
        >
          <Box>
            <NavLink
              label={
                <Text weight={600} size={'md'}>
                  THE MOVIE DB SEARCH
                </Text>
              }
              component={Link}
              to={'/'}
            />
          </Box>
          <Box>
            <Group position='right'>
              <ColorSchemeToggle />
              <MyListLink />
            </Group>
          </Box>
        </Box>
      </Container>
    </MantineHeader>
  );
}

export default Header;
