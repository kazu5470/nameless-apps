import {
  Textarea as TextareaMantine,
  TextareaProps as TextareaMantineProps,
} from '@mantine/core';

export type TextareaProps = TextareaMantineProps;

export function TextArea(props: TextareaProps) {
  return <TextareaMantine {...props} />;
}
