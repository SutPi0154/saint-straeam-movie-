import SnackBar from "@/components/Snackbar";
import Layout from "@/layout";
import { store } from "@/store";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#00925d" },
      secondary: { main: "#fff" },
      success: { main: "#1f1d22" },
      info: { main: "#0d0c0f" },
      warning: { main: "#98a0a6" },
    },
    typography: {
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Antonio"',
      ].join(","),
      button: {
        textTransform: "none",
      },
    },
  });

  return (
    <SessionProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Layout>
            <CssBaseline />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
        <SnackBar />
      </Provider>
    </SessionProvider>
  );
}
