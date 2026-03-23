import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import HeaderWrapper from "@/components/HeaderWrapper";
import Footer from "@/components/footer"

const roboto = Roboto({
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  variable: "--font-roboto",
  subsets: ["latin", 'cyrillic']
});

export const metadata: Metadata = {
  title: "Купить квартиры в Великом Новгороде и области в новостройках от застройщика",
  description: "Новгородская строительная компания «Глория», действуя как генеральный подрядчик, на протяжении 20 лет имеет репутацию надежного делового застройщика ... квартиры Великий Новгород. строительство и продажа квартир. отдел продаж. +7(8162) 623-800.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
<HeaderWrapper />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
