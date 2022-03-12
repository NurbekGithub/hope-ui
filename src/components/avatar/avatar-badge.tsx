import { splitProps } from "solid-js";

import { useComponentStyleConfigs } from "@/theme/provider";
import { classNames, createClassSelector } from "@/utils/css";

import { Box } from "../box/box";
import { ElementType, HTMLHopeProps } from "../types";
import { avatarBadgeStyles } from "./avatar.styles";

export type AvatarBadgeProps<C extends ElementType = "div"> = HTMLHopeProps<C>;

const hopeAvatarBadgeClass = "hope-avatar__badge";

/**
 * AvatarBadge used to show extra badge to the top-right
 * or bottom-right corner of an avatar.
 */
export function AvatarBadge<C extends ElementType = "div">(props: AvatarBadgeProps<C>) {
  const theme = useComponentStyleConfigs().Avatar;

  const [local, others] = splitProps(props, ["class"]);

  const classes = () => classNames(local.class, hopeAvatarBadgeClass, avatarBadgeStyles());

  return <Box class={classes()} __baseStyle={theme?.baseStyle?.badge} {...others} />;
}

AvatarBadge.toString = () => createClassSelector(hopeAvatarBadgeClass);
