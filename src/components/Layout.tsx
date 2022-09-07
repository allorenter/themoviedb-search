import Header from '@/components/Header';
import { Container } from '@mantine/core';

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <Container mt={12}>{children}</Container>
    </>
  );
}

export default Layout;
