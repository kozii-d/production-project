import React, {
  FC, ReactNode, useEffect, useMemo, useState,
} from "react";

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "../lib/ThemeContext";

// localStorage возвращает строку и с помощью as мы преобразовываем строку к типу Theme
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, children } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  useEffect(() => {
    document.body.classList.add(theme);

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
