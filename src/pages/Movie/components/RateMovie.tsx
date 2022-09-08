import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import {
  Space,
  Textarea,
  Title,
  Text,
  Group,
  NumberInput,
  Button,
  Loader,
  Center,
} from '@mantine/core';
import RatedMovie from '@/types/RatedMovie';
import useRateMovie from '../hooks/useRateMovie';
import { showNotification } from '@mantine/notifications';
import useGetRatedMovie from '../hooks/useGetRatedMovie';

function RateMovie({ movieId }: { movieId: string }) {
  const [rate, setRate] = useState<number | undefined>();
  const [comments, setComments] = useState<string | undefined>();
  const { data, isLoading } = useGetRatedMovie(movieId);
  const mutation = useRateMovie();

  useEffect(() => {
    setRate(data?.rate);
    setComments(data?.comments);
  }, [data]);

  const onChangeRateInput = (value: number) => {
    setRate(value);
  };

  const onChangeCommentsInput: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComments(e.target.value);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData: RatedMovie = { id: movieId, rate, comments, timestamp: Date.now() };
    mutation.mutateAsync(formData).then(() => {
      showNotification({
        message: 'Película valorada correctamente',
        autoClose: 2000,
        color: 'green',
      });
    });
  };

  if (isLoading) {
    return (
      <Center mt={12}>
        <Loader size={'lg'} color={'gray'} />
      </Center>
    );
  }

  const disabledSubmitButton = rate === undefined && comments === undefined;

  return (
    <>
      <Title order={4}>Mi valoración</Title>
      <Space h='md' />
      <form onSubmit={onSubmit}>
        <Group>
          <Text weight={600} mb={2}>
            Puntuación
          </Text>
          <NumberInput value={rate} onChange={onChangeRateInput} precision={2} min={0} max={10} />
        </Group>
        <Space h='sm' />
        <Text weight={600} mb={2}>
          Comentarios
        </Text>
        <Textarea value={comments} onChange={onChangeCommentsInput} />
        <Group position='left'>
          <Button
            type='submit'
            mt={12}
            variant='light'
            loading={mutation.isLoading}
            disabled={disabledSubmitButton}
          >
            Guardar
          </Button>
        </Group>
      </form>
    </>
  );
}

export default RateMovie;
