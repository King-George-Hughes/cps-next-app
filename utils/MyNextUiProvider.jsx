// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";

export function MyNextUiProvider({ children }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

// "build": "next build",
