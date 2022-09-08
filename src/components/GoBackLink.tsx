import ArrowLeft from '@/icons/ArrowLeft';
import { Group, UnstyledButton, useMantineTheme } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function GoBackLink() {
  const { colorScheme } = useMantineTheme();
  const navigate = useNavigate();

  const onClick = () => {
    console.log('onClick');

    navigate(-1);
  };

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
        stroke: colorScheme === 'dark' ? 'white' : 'black',
      })}
      onClick={onClick}
    >
      <Group>
        <ArrowLeft />
      </Group>
    </UnstyledButton>
  );
}

export default GoBackLink;
