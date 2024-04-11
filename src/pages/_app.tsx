// Tutorial to implement multiple layouts: https://www.codeconcisely.com/posts/nextjs-multiple-layouts/
import "@/styles/globals.css";
import "@/styles/colors.css";
import "@/styles/spacing.css";
import type { AppProps } from "next/app";

import { AuthProvider } from "@/context/AuthContext";
import { AppLayout } from "@/components/Layouts/AppLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AuthProvider>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </AuthProvider>
    </>
  );
}
