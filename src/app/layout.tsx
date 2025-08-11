import "./globals.css";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import {  Poppins } from 'next/font/google';


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],  // اختار الأوزان اللي تحبها
  variable: '--font-poppins', // لو حابب تستخدم متغير CSS
});


export const metadata: Metadata = {
  title: "Next Starter",
  description: "next-starter",
  icons: {
    icon: "/favicon.ico",
  },
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${poppins.className} antialiased`}>
        <NextIntlClientProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-4rem)] overflow-x-hidden">{children}</main>
          <Footer />
          <Toaster />

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
