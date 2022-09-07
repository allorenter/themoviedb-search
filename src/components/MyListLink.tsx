import { Box, NavLink } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

function MyListLink() {
  const location = useLocation();

  return (
    <Box sx={{ maxHeight: 40 }}>
      <NavLink
        label={'Mi Lista'}
        // icon={<item.icon size={16} stroke={1.5} />}
        color='cyan'
        component={Link}
        to={'/mylist'}
        active={location.pathname === '/mylist'}
      />
    </Box>
  );
}

export default MyListLink;
