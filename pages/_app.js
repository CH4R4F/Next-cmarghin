import "@fontsource/lato";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/300.css";
import "../assets/styles/globals.css";
import Layout from "../components/common/Layout";
import App from "next/app";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
