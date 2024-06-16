import { Avatar as AvatarMantine, AvatarProps as AvatarPropsMantine } from "@mantine/core";

type AvatarProps = AvatarPropsMantine;

export function Avatar(props: AvatarProps) {
  return <AvatarMantine {...props}></AvatarMantine>;
}
