import { TextInput } from '@mantine/core';

function InputSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <TextInput value={value} onChange={onChange} />;
}

export default InputSearch;
