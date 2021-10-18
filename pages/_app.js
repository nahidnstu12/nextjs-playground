import "tailwindcss/tailwind.css";
import "../styles/styles.scss";
// import "../styles/auth.scss";
import { useEffect } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../hooks/theme";
import { Provider } from "next-auth/client";
import { CookiesProvider } from "react-cookie";
import wrapper from "../redux/store";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <CookiesProvider>
      {/* <Provider> */}
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StylesProvider>
      {/* </Provider> */}
    </CookiesProvider>
  );
}

export default wrapper.withRedux(MyApp);
