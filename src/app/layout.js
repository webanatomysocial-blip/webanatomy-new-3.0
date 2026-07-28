import localFont from "next/font/local";
import LayoutShell from "@/components/LayoutShell";
import "@/app/globals.css";

const inter = localFont({
  src: "../assets/fonts/Inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Webanatomy — Design, Engineering & Growth Agency",
    template: "%s | Webanatomy",
  },
  description:
    "Webanatomy is a design and engineering agency that builds digital experiences for brands — driving real growth across India, the UK and Europe.",
  metadataBase: new URL("https://webanatomy.in"),
  openGraph: {
    siteName: "Webanatomy",
    type: "website",
    locale: "en_IN",
  },
  verification: {
    google: "google7a49d3c0962c59c7",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/fav.png" />
        <meta name="google-site-verification" content="google7a49d3c0962c59c7" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
