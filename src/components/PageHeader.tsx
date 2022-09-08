import { Title } from '@mantine/core';
import GoBackLink from './GoBacklINK';

function PageHeader({ text, showGoBackButton }: { text?: string; showGoBackButton: boolean }) {
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
      {showGoBackButton && <GoBackLink />}
      {text}
    </Title>
  );
}

export default PageHeader;
