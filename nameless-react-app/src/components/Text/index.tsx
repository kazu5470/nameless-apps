import {
  Text as TextMantine,
  TextProps as TextMantineProps,
} from '@mantine/core';

export type TextProps = TextMantineProps & {
  children: React.ReactNode;
};

export function Text(props: TextProps) {
  return <TextMantine {...props}></TextMantine>;
}
