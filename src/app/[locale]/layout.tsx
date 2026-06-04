import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "../globals.css";
import { Providers } from "@/components/Providers";
import { NavigationBar } from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { CustomCursor } from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Joel Medina | Front End Engineer",
  description: "Portfólio de engenharia front end e design imersivo.",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased font-body bg-background text-foreground selection:bg-silver selection:text-offblack" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <CustomCursor />
            <div className="fixed bottom-0 left-0 w-full h-48 pointer-events-none z-[40] backdrop-blur-[12px] fade-bottom" />
            <NavigationBar currentLocale={locale} />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
