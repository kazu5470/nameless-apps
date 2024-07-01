import { Input, InputProps } from '@mantine/core';

export type TextInputProps = InputProps & {
  placeholder: string;
  value: string;
  onChangeValue: (text: string) => void;
};

export function TextInput({
  placeholder,
  value,
  onChangeValue,
  ...props
}: TextInputProps) {
  return (
    <Input
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        onChangeValue(event.currentTarget.value);
      }}
      {...props}
    />
  );
}
