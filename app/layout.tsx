import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fashion center",
  description: "This fashion design center for oromo culture clothes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
