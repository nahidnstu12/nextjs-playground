import "tailwindcss/tailwind.css";
import "../styles/styles.scss";
import "../styles/auth.scss";
import { useEffect } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from '@material-ui/styles';
import theme from "../hooks/theme";
import { Provider } from "next-auth/client";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <Provider>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
}

export default MyApp;
