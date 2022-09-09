import { ListDetails } from '@/icons';
import { Box, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

function MyListLink() {
  const location = useLocation();

  return (
    <Box sx={{ maxHeight: 40 }}>
      <NavLink
        label={'Mi Lista'}
        icon={<ListDetails width='18px' height='18px' />}
        component={Link}
        to={'/mylist'}
        sx={(theme) => ({
          height: 40,
          borderRadius: 4,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? 'white!important' : 'black!important',
          stroke: theme.colorScheme === 'dark' ? 'white' : 'black',
          fontWeight: 600,
        })}
        active={location.pathname === '/mylist'}
      />
    </Box>
  );
}

export default MyListLink;
