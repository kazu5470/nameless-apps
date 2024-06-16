import {
  AppShell as AppShellMantine,
  AppShellProps as AppShellMantineProps,
  Burger,
  Group,
  Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useRouter } from 'next/router';
import { Path } from '@/config/path';

export type AppShellProps = AppShellMantineProps & {
  mainContent: JSX.Element;
  path: Path[];
};

export function AppShell({ mainContent, path }: AppShellProps) {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();

  return (
    <AppShellMantine
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShellMantine.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <MantineLogo size={30} />
        </Group>
      </AppShellMantine.Header>
      <AppShellMantine.Navbar p="md">
        {path.map((path, index) => (
          <Text
            key={index}
            size="xl"
            onClick={() => router.push(path.pathname)}
            style={{ cursor: 'pointer' }}
          >
            {path.text}
          </Text>
        ))}
      </AppShellMantine.Navbar>
      <AppShellMantine.Main>{mainContent}</AppShellMantine.Main>
    </AppShellMantine>
  );
}
