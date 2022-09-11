import { Center, Loader as MantineLoader } from '@mantine/core';

function Loader({ height }: { height?: number }) {
  return (
    <Center mt={12}>
      <MantineLoader size={'lg'} height={height} color={'gray'} />
    </Center>
  );
}

export default Loader;
