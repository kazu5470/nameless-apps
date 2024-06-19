import {
  Table as TableMantine,
  TableProps as TablePropsMantine,
} from '@mantine/core';
import { ReactNode } from 'react';

import { Center } from '@/components/Center';
import { Text } from '@/components/Text';

type TableProps = TablePropsMantine & {
  title?: string;
  ths?: ReactNode;
  rows: ReactNode;
  caption?: ReactNode;
  dataLength: number;
};

export function Table({
  title,
  ths,
  rows,
  caption,
  dataLength,
  captionSide = 'bottom',
  ...props
}: TableProps) {
  const captionElement = (
    <caption>
      {!dataLength ? (
        <Center my={100}>
          <Text c={'black'}>該当する項目がありません</Text>
        </Center>
      ) : (
        caption
      )}
    </caption>
  );

  return (
    <TableMantine
      highlightOnHover
      withRowBorders
      captionSide={captionSide}
      style={{ tableLayout: 'fixed' }}
      {...props}
    >
      {captionElement}
      <thead>
        {title ? (
          <tr>
            <th>
              <Text ml={24} my={10}>
                {title}
              </Text>
            </th>
          </tr>
        ) : (
          ths
        )}
      </thead>
      <tbody style={{ backgroundColor: 'white', wordWrap: 'break-word' }}>
        {rows}
      </tbody>
    </TableMantine>
  );
}
