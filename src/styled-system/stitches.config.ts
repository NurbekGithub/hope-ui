import { createStitches, defaultThemeMap } from "@stitches/core";

import { media } from "./media";
import { shorthands } from "./shorthands";
import { defaulThemeTokens } from "./tokens";

export const { css, globalCss, keyframes, theme, createTheme, getCssText, config } = createStitches(
  {
    prefix: "hope",
    themeMap: defaultThemeMap,
    theme: defaulThemeTokens,
    media,
    utils: shorthands,
  }
);
