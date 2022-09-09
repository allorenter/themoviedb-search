import { Text } from '@mantine/core';

const COLORS = {
  '0': '#c90000',
  '1': '#c12b00',
  '2': '#b95200',
  '3': '#b17600',
  '4': '#a99600',
  '5': '#8fa000',
  '6': '#669800',
  '7': '#409000',
  '8': '#1e8800',
  '9': '#1b8700',
  '10': '#008000',
};

function RateInfo({ rate }: { rate?: number }) {
  if (!rate) {
    return <></>;
  }

  const color: string = COLORS[Math.round(rate).toString()];

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
