import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Annie Booker, an illustrator based in Bristol",
  description:
    "Discover the stunning illustrations by Annie Booker. Explore a world of creativity and color through Annie's unique artistic vision.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Header />
        <Footer />
      </body>
    </html>
  );
}

// const Layout = ({ children }) => {
//   return (
//     <html lang="en">
//       <body>
//         <main>{children}</main>
//       </body>
//     </html>
//   );
// };

// export default Layout;
