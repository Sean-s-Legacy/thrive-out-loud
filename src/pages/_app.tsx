// Rsource for using multiple layouts in Next.Js: https://www.codeconcisely.com/posts/nextjs-multiple-layouts/
// Will need to implement when building the onboarding screens with the logo navbar and no footer

import "@/styles/globals.css";
import "@/styles/colors.css";
import { ReactNode } from "react";
import type {
  AppProps,
  AppContext,
  AppInitialProps,
  AppLayoutProps,
} from "next/app";
import type { NextComponentType } from "next";

import { AuthProvider } from "@/context/AuthContext";
import { AppLayout } from "@/components/Layouts/AppLayout";

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </>
  );
};

export default App;
