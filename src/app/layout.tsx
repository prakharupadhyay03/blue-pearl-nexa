import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PageTransitionProvider } from "@/context/PageTransitionContext";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#101A35",
};

export const metadata: Metadata = {
  title: {
    default: "Blue Pearl Nexa | Professional Website Design & Development",
    template: "%s | Blue Pearl Nexa",
  },
  description:
    "Blue Pearl Nexa creates modern, responsive and high-performance websites that help businesses build a stronger digital presence.",
  keywords: [
    "website development",
    "web design",
    "digital solutions",
    "Next.js agency",
    "Blue Pearl Nexa",
    "high-performance web",
    "enterprise website design",
    "e-commerce development",
  ],
  authors: [{ name: "Blue Pearl Nexa" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Blue Pearl Nexa | Professional Website Design & Development",
    description:
      "We design and develop powerful websites that help businesses establish their digital presence, connect with customers, and grow with confidence.",
    url: "https://bluepearlnexa.com",
    siteName: "Blue Pearl Nexa",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Blue Pearl Nexa — Premium Website Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Pearl Nexa | Professional Website Design & Development",
    description:
      "Blue Pearl Nexa creates modern, responsive and high-performance websites that help businesses build a stronger digital presence.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen w-full max-w-full m-0 p-0 flex flex-col bg-[#FAFAF8] text-[#171B24] antialiased selection:bg-[#2448A5] selection:text-[#FAFAF8] overflow-x-hidden">
        <PageTransitionProvider>
          <Navbar />
          <main className="flex-grow w-full max-w-full m-0 p-0 overflow-x-hidden">{children}</main>
          <Footer />
        </PageTransitionProvider>
      </body>
    </html>
  );
}
