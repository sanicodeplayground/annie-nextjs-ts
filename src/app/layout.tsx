import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { DM_Serif_Display } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annie Booker | Illustrator based in Bristol, UK",
  description:
    "Discover the stunning illustrations by Annie Booker. Explore a world of creativity and color through Annie's unique artistic vision. Illustrations for social media, murals, menus, blog posts, newsletters, websites and more...",
};

const dMSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dMSerifDisplay.className}>
      <body className="bg-custom-light text-custom-primary">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
