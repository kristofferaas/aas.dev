import { useContext } from "react";
import { useTheme as useStyledComponentTheme } from "styled-components";
import { ThemeContext } from "../components/Theme";

const useTheme = () => {
  const theme = useStyledComponentTheme();
  const setter = useContext(ThemeContext);

  return [theme, setter] as const;
};

export default useTheme;
