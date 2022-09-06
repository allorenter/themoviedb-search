import { TextInput } from '@mantine/core';

function InputSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <TextInput
      label='Escribe para buscar películas'
      description='Buscador de películas'
      value={value}
      onChange={onChange}
    />
  );
}

export default InputSearch;
