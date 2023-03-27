import "@/styles/globals.css";
import "@/styles/colors.css";
import type { AppProps } from "next/app";

import { AuthProvider } from "@/context/AuthContext";
import { AppLayout } from "@/components/layouts/AppLayout";

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
