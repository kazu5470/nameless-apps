import {
  Image as ImageMantine,
  ImageProps as ImageMantineProps,
} from '@mantine/core';

export type ImageProps = ImageMantineProps;

export function Image({ ...props }: ImageMantineProps) {
  return <ImageMantine {...props} />;
}
