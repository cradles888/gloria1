import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header"
import HeaderWhiteLogo from "@/components/header-white-logo"
import HeaderWrapper from "@/components/HeaderWrapper";

import Footer from "@/components/footer"
import CardNews from "@/components/news/card-news";
import { headers } from 'next/headers';

const roboto = Roboto({
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  variable: "--font-roboto",
  subsets: ["latin", 'cyrillic']
});

export const metadata: Metadata = {
  title: "Купить квартиры в Великом Новгороде и области в новостройках от застройщика",
  description: "Новгородская строительная компания «Глория», действуя как генеральный подрядчик, на протяжении 20 лет имеет репутацию надежного делового застройщика ... квартиры Великий Новгород. строительство и продажа квартир. отдел продаж. +7(8162) 623-800.",
};

  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '';
  const isUnnatovPage = pathname === '/unnatov' || pathname === '/unnatov/';

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
