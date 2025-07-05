import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AOSProvider from "./AOSProvider";

export const metadata: Metadata = {
  title: "DataKernels - AI & Technology Solutions",
  description:
    "Leading AI and technology company specializing in web development, app development, data analytics, AI applications, and CRM automations.",
  keywords:
    "AI, technology, web development, app development, data analytics, CRM automation, n8n workflows",
  generator: "v0.dev",
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
      </head>
      <body className="font-hk-grotesk">
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}
