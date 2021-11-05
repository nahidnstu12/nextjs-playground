import "tailwindcss/tailwind.css";
import "../styles/styles.scss";
// import "../styles/auth.scss";
import { useEffect, useState } from "react";
import { StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../hooks/theme";
import { Provider } from "next-auth/client";
import { CookiesProvider } from "react-cookie";
import wrapper from "../redux/store";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import axios from "axios";
import Router from "next/router";
import { LoadingTale } from "../components/common/Loading";

const fetcher = (url) => axios.get(url).then((res) => res.data);
axios.defaults.baseURL = "http://localhost:5000";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  // return loading ? (
  //   <LoadingTale />
  // ) : (
    return(
    <SWRConfig value={{ fetcher, dedupingInterval: 10000 }}>
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
