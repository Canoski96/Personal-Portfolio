"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BreakPointTheme } from "./styles/Styles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useMemo, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import ScrollToSection from "./scrollToSection";

const inter = Inter({ subsets: ["latin"] });

const light = {
  "--bg-primary": "#edeff4",
  "--btn-primary": "#383d5d",
  "--txt-primary": "#383d5d",
};
const dark = {
  "--bg-primary": "#383d5d",
  "--btn-primary": "#838cb8",
  "--txt-primary": "#edeff4",
};
const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light" ? light : dark),
  },
});

export default function RootLayout({ children }) {
  const [mode, setMode] = useState(() => {
    // Load theme preference from localStorage or default to "light" mode
    return typeof window !== "undefined"
      ? window.localStorage.getItem("theme") || "light"
      : "light";
  });
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    // Access the window object only on the client-side
    if (typeof window !== "undefined") {
      const savedMode = window.localStorage.getItem("theme");
      if (savedMode) {
        setMode(savedMode);
      }
    }
  }, []);

  const mergedTheme = {
    ...BreakPointTheme,
    ...theme,
    palette: {
      ...BreakPointTheme.palette,
      ...theme.palette,
    },
  };

  const toggleMode = () => {
    setMode((prevMode) => {
      const newMode = prevMode === "light" ? "dark" : "light";
      const newColors = newMode === "light" ? light : dark;

      // Update CSS variables
      const root = window.document.documentElement;
      root.style.setProperty("--bg-primary-light", newColors["--bg-primary"]);
      root.style.setProperty("--btn-primary-light", newColors["--btn-primary"]);
      root.style.setProperty("--txt-primary-light", newColors["--txt-primary"]);

      window.localStorage.setItem("theme", newMode);

      return newMode;
    });
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={mergedTheme}>
        <ThemeContext.Provider value={{ mode, toggleMode }}>
          <html lang="en">
            <head>
              <title>{metadata.title}</title>
              <link rel="icon" href={metadata.icon} />
              <meta name="description" content={metadata.description} />
              <meta name="viewport" content={metadata.viewport} />
            </head>

            <body className={inter.className}>
              <Header />
              {children}
              <Footer />
            </body>
          </html>
        </ThemeContext.Provider>
      </ThemeProvider>
    </I18nextProvider>
  );
}
