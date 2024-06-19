import { Center as CenterMantine, CenterProps as CenterPropsMantine } from "@mantine/core";

type CenterProps = CenterPropsMantine;

export function Center(props: CenterProps) {
  return <CenterMantine {...props}></CenterMantine>;
}
