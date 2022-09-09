import { Header as MantineHeader, NavLink, Group, Box, Container } from '@mantine/core';
import { Link } from 'react-router-dom';
import ColorSchemeToggle from './ColorSchemeToggle';
import MyListLink from './MyListLink';

function Header() {
  return (
    <MantineHeader height={70} p='md'>
      <Container>
        <Box
          sx={() => ({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          })}
        >
          <Box>
            <NavLink label={'THE MOVIE DB SEARCH'} component={Link} to={'/'} />
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
