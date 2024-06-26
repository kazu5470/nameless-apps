import {
  Button as ButtonMantine,
  ButtonProps as ButtonMantineProps,
  Text,
  TextProps,
} from '@mantine/core';

export type ButtonProps = ButtonMantineProps & {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textProps?: TextProps;
};

export function Button({ title, onClick, textProps, ...props }: ButtonProps) {
  return (
    <ButtonMantine onClick={onClick} {...props}>
      <Text {...textProps}>{title}</Text>
    </ButtonMantine>
  );
}
