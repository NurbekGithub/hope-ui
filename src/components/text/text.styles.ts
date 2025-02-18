import { VariantProps } from "@stitches/core";

import { css } from "@/styled-system/stitches.config";

export const textStyles = css({
  variants: {
    size: {
      xs: {
        fontSize: "$xs",
        lineHeight: "$4",
      },
      sm: {
        fontSize: "$sm",
        lineHeight: "$5",
      },
      base: {
        fontSize: "$base",
        lineHeight: "$6",
      },
      lg: {
        fontSize: "$lg",
        lineHeight: "$7",
      },
      xl: {
        fontSize: "$xl",
        lineHeight: "$7",
      },
      "2xl": {
        fontSize: "$2xl",
        lineHeight: "$8",
      },
      "3xl": {
        fontSize: "$3xl",
        lineHeight: "$9",
      },
      "4xl": {
        fontSize: "$4xl",
        lineHeight: "$10",
      },
      "5xl": {
        fontSize: "$5xl",
        lineHeight: "$none",
      },
      "6xl": {
        fontSize: "$6xl",
        lineHeight: "$none",
      },
      "7xl": {
        fontSize: "$7xl",
        lineHeight: "$none",
      },
      "8xl": {
        fontSize: "$8xl",
        lineHeight: "$none",
      },
      "9xl": {
        fontSize: "$9xl",
        lineHeight: "$none",
      },
    },
  },
});

export type TextVariants = VariantProps<typeof textStyles>;
