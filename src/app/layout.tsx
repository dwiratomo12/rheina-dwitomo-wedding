import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rheina & Dwi Tomo | Wedding Invitation",
  description:
    "With joy and gratitude, we invite you to celebrate our wedding day. Syahrheina Feby Indriani & Dwi Setyo Wiratomo.",
  openGraph: {
    title: "Rheina & Dwi Tomo | Wedding Invitation",
    description:
      "With joy and gratitude, we invite you to celebrate our wedding day.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">{children}</body>
    </html>
  );
}
