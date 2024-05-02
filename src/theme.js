import { useState, useMemo, createContext } from "react";
import { createTheme } from "@mui/material/styles";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        //dark theme
        primary_text: {
          100: "#cfcfd8",
          200: "#9f9fb1",
          300: "#6e6f89",
          400: "#3e3f62",
          500: "#0e0f3b", //use this
          600: "#0b0c2f",
          700: "#080923",
          800: "#060618",
          900: "#03030c",
        },
        text_background: {
          100: "#cfd7dc",
          200: "#9faeb9",
          300: "#6e8697",
          400: "#3e5d74",
          500: "#0e3551", //use this
          600: "#0b2a41",
          700: "#082031",
          800: "#061520",
          900: "#030b10",
        },

        secondary_text: {
          100: "#e6ebee",
          200: "#cdd7dc",
          300: "#b5c2cb",
          400: "#9caeb9",
          500: "#839aa8", //use this
          600: "#697b86",
          700: "#4f5c65",
          800: "#343e43",
          900: "#1a1f22",
        },

        light_text: {
          100: "#fcfcfc",
          200: "#f9f9f9",
          300: "#f6f6f6",
          400: "#f3f3f3",
          500: "#f0f0f0", //use this
          600: "#c0c0c0",
          700: "#909090",
          800: "#606060",
          900: "#303030",
        },

        special_text: {
          100: "#ffe5cc",
          200: "#ffca99",
          300: "#ffb066",
          400: "#ff9533",
          500: "#ff7b00", //use this
          600: "#cc6200",
          700: "#994a00",
          800: "#663100",
          900: "#331900",
        },
        dark_theme: {
          100: "#d1d1d1",
          200: "#a3a3a3",
          300: "#747474",
          400: "#464646",
          500: "#181818", //use this
          600: "#131313",
          700: "#0e0e0e",
          800: "#0a0a0a",
          900: "#050505",
        },
      }
    : {
        //light theme
        primary_text: {
          100: "#03030c",
          200: "#060618",
          300: "#080923",
          400: "#0b0c2f",
          500: "#0e0f3b", //use this
          600: "#3e3f62",
          700: "#6e6f89",
          800: "#9f9fb1",
          900: "#cfcfd8",
        },
        text_background: {
          100: "#030b10",
          200: "#061520",
          300: "#082031",
          400: "#0b2a41",
          500: "#0e3551", //use this
          600: "#3e5d74",
          700: "#6e8697",
          800: "#9faeb9",
          900: "#cfd7dc",
        },

        secondary_text: {
          100: "#1a1f22",
          200: "#343e43",
          300: "#4f5c65",
          400: "#697b86",
          500: "#839aa8", //use this
          600: "#9caeb9",
          700: "#b5c2cb",
          800: "#cdd7dc",
          900: "#e6ebee",
        },

        light_text: {
          100: "#303030",
          200: "#606060",
          300: "#909090",
          400: "#c0c0c0",
          500: "#f0f0f0", //use this
          600: "#f3f3f3",
          700: "#f6f6f6",
          800: "#f9f9f9",
          900: "#fcfcfc",
        },

        special_text: {
          100: "#331900",
          200: "#663100",
          300: "#994a00",
          400: "#cc6200",
          500: "#ff7b00", //use this
          600: "#ff9533",
          700: "#ffb066",
          800: "#ffca99",
          900: "#ffe5cc",
        },
        light_theme: {
          100: "#fdfdfc",
          200: "#fbfbfa",
          300: "#faf9f7",
          400: "#f8f7f5",
          500: "#f6f5f2", //use this
          600: "#c5c4c2",
          700: "#949391",
          800: "#626261",
          900: "#313130",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary_text[500],
            },
            secondary: {
              main: colors.secondary_text[500],
            },
            neutral: {
              dark: colors.light_text[700],
              main: colors.light_text[500],
              light: colors.light_text[100],
            },
            background: {
              default: colors.dark_theme[500],
            },
          }
        : {
            primary: {
              main: colors.primary_text[100],
            },
            secondary: {
              main: colors.secondary_text[500],
            },
            neutral: {
              dark: colors.light_text[700],
              main: colors.light_text[500],
              light: colors.light_text[100],
            },
            background: {
              default: colors.light_theme[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
