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
import { SWRConfig } from "swr";
import axios from "axios";


const fetcher = (url) => axios.get(url).then((res) => res.data);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <SWRConfig value={{ fetcher, dedupingInterval:10000 }}>
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
    </SWRConfig>
  );
}

export default wrapper.withRedux(MyApp);
// export default MyApp
