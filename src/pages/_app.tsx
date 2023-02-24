import "@/styles/globals.css";
import "@/styles/variables.less";

// import { Montserrat } from "@next/font/google";
// import { Work_Sans } from "@next/font/google";

import type { AppProps } from "next/app";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--montserrat-font",
// });
// const work_sans = Work_Sans({
//   subsets: ["latin"],
//   variable: "--work_sans-font",
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={`${montserrat.className} ${work_sans.className}`}>
    <Component {...pageProps} />
    // </main>
  );
}
