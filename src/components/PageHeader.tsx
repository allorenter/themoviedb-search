import { Text, Title } from '@mantine/core';
import GoBackLink from './GoBacklINK';

function PageHeader({
  title,
  description,
  showGoBackButton,
}: {
  title?: string;
  description?: string;
  showGoBackButton: boolean;
}) {
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
      <div>
        {title}
        <Text size={'xs'}>{description}</Text>
      </div>
    </Title>
  );
}

export default PageHeader;
