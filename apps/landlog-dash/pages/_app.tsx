import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 3,
  color: "#0ea5e9",
  className: "bar-of-progress z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {  
    return (
       <Component {...pageProps} />
    );
}

export default MyApp
