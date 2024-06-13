import {
  AppShell as AppShellMantine,
  Burger,
  Group,
  Skeleton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';

export function AppShell() {
  // const [opened, { toggle }] = useDisclosure();

  return (
    <AppShellMantine
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShellMantine.Header>
        <Group h="100%" px="md">
          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" /> */}
          <MantineLogo size={30} />
        </Group>
      </AppShellMantine.Header>
      <AppShellMantine.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false} />
          ))}
      </AppShellMantine.Navbar>
      <AppShellMantine.Main>Main</AppShellMantine.Main>
    </AppShellMantine>
  );
}
