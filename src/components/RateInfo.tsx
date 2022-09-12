import { Text } from '@mantine/core';

const COLORS = [
  '#c90000',
  '#c12b00',
  '#b95200',
  '#b17600',
  '#a99600',
  '#8fa000',
  '#669800',
  '#409000',
  '#1e8800',
  '#1b8700',
  '#008000',
];

function RateInfo({ rate }: { rate?: number }) {
  if (!rate) {
    return <></>;
  }

  const color: string = COLORS[Math.round(rate)];

  const formattedRate = rate.toFixed(1);

  return (
    <Text
      color={color}
      weight={700}
      sx={() => ({
        border: '3px solid',
        borderRadius: '10px',
        padding: '3px',
      })}
    >
      {formattedRate}
    </Text>
  );
}

export default RateInfo;
