import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Viena darba nedēļa datorikas studenta dzīvē",
  description:
    "Vienas lapas mājaslapa par datorikas studenta ikdienu Latvijas Universitātē.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv">
      <body>{children}</body>
    </html>
  );
}
