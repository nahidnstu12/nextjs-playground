import "tailwindcss/tailwind.css";
import "../styles/styles.scss";
import { StylesProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }) {
  return (
    <StylesProvider injectFirst>
      <Component {...pageProps} />
    </StylesProvider>
  );
}

export default MyApp;
