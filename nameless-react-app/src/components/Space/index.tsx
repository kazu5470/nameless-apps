import { Space as SpaceMantine, SpaceProps as SpacePropsMantine } from "@mantine/core";

type SpaceProps = SpacePropsMantine;

export function Space(props: SpaceProps) {
  return <SpaceMantine {...props}></SpaceMantine>;
}
