import "styled-component";
import { defaultTheme } from "../styles/thames/default";

type ThemeType = typeof defaultTheme;

declare module "styled-component" {
  export interface DefaultThame extends ThemeType {}
}
