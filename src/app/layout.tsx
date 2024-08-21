import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { NavMenu } from "@/components/navbar/NavigationMenu";
import { Footer } from "@/components/footer/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavMenu />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
