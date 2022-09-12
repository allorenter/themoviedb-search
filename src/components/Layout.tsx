import Header from '@/components/Header';
import { Container, Space } from '@mantine/core';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <Space h='xl' />
      <Container>{children}</Container>
      <Space h='lg' />
    </>
  );
}

export default Layout;
