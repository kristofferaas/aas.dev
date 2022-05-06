import colors from "nice-color-palettes";
import { createContext, useMemo, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

export const ThemeContext = createContext<(nonce: number) => void>(
  (n) => void n
);

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

interface ThemeInterface {
  palette: [string, string, string, string, string];
}

export interface ThemeProps {
  children: React.ReactNode;
}

const Theme: React.FC<ThemeProps> = (props) => {
  const [nonce, setNonce] = useState(17);

  const theme = useMemo<ThemeInterface>(() => {
    return {
      palette: colors[nonce % 100] as ThemeInterface["palette"],
    };
  }, [nonce]);

  return (
    <ThemeContext.Provider value={setNonce}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeInterface {}
}
