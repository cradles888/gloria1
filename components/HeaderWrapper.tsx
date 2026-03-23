'use client';

import { usePathname } from 'next/navigation';
import Header from "./header";
import HeaderWhiteLogo from "./header-white-logo";

export default function HeaderWrapper() {
  const pathname = usePathname();
  const isUnnatovPage = pathname === '/unnatov' || pathname === '/unnatov/';
  
  return isUnnatovPage ? <HeaderWhiteLogo /> : <Header />;
}