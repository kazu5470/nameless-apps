import React from 'react';
import { SWRConfig } from 'swr';

import '@mantine/core/styles.css';
import { AppShell } from '@/components/AppShell';

import { MantineProvider } from '@mantine/core';
import { path } from '@/config/path';

type ComponentType = React.ComponentType & {
  layout?: string;
};

type AppProps = {
  Component: ComponentType;
};

export default function App({ Component }: AppProps) {
  return (
    <>
      <MantineProvider>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
          }}
        />
        <AppShell mainContent={<Component />} path={path} />
      </MantineProvider>
    </>
  );
}
