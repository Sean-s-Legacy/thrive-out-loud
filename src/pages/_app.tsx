import "@/styles/globals.css";
import "@/styles/colors.css";
import type { AppProps } from "next/app";

import Navbar from "@/components/Navbar";
import FooterNotAuth from "@/components/FooterNotAuth";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <FooterNotAuth />
    </>
  );
}
