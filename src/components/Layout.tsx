import Header from '@/components/Header';
import { Container, Space } from '@mantine/core';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <Space h='lg' />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
