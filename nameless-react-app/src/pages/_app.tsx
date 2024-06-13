import React from 'react';
import { SWRConfig } from 'swr';

import Home from '@/pages/Home';
import Top from '@/pages/Top';
import Todo from '@/pages/Todo';
import '@mantine/core/styles.css';
import { AppShell } from '@/components/AppShell';

import { MantineProvider } from '@mantine/core';
import { Sidebar } from '@/components/Sidebar';

export default function App() {
  return (
    <>
      <MantineProvider>
        <SWRConfig
          value={{
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
          }}
        />
        <AppShell />
        <Home />
        <Top />
        <Todo />
      </MantineProvider>
    </>
  );
}
