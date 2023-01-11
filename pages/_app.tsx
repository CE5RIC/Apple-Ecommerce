import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Store } from "@reduxjs/toolkit";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
