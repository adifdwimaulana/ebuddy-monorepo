"use client";

import { SnackbarProvider } from "@/contexts/snackbar-context";
import store, { persistor } from "@/store/store";
import { Provider } from "@/theme/theme-provider";
import { Provider as StoreProvicer } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <StoreProvicer store={store}>
            <PersistGate persistor={persistor}>
              <SnackbarProvider>{children}</SnackbarProvider>
            </PersistGate>
          </StoreProvicer>
        </Provider>
      </body>
    </html>
  );
}
