import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "./AOSProvider";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Datakernels Analytics and Consulting LLP",
  description:
    "Leading AI and technology company specializing in web development, app development, data analytics, AI applications, and CRM automations.",
  keywords:
    "AI, technology, web development, app development, data analytics, CRM automation, Agentic AI flows",
  // generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=HK+Grotesk:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/DK-fav.png" sizes="any" />
      </head>
      <body className="font-hk-grotesk">
        <AOSProvider>
          {children}
          <Toaster position="top-right" richColors />
        </AOSProvider>
      </body>
    </html>
  );
}
