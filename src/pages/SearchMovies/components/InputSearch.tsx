import { Input } from '@mantine/core';

function InputSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return <Input value={value} onChange={onChange} type={'search'} />;
}

export default InputSearch;
