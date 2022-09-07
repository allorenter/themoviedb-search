import ArrowLeft from '@/icons/ArrowLeft';
import { Title } from '@mantine/core';

function PageHeader({ text, showGoBackButton }: { text: string; showGoBackButton: boolean }) {
  return (
    <Title
      sx={() => ({
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      })}
      order={3}
      mb={12}
    >
      {showGoBackButton && <ArrowLeft />}
      {text}
    </Title>
  );
}

export default PageHeader;
