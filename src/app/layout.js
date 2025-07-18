import { Oxygen } from "next/font/google"; // Import Oxygen
import "./globals.css";
import { CartProvider } from "@/context/cartContext";

// Configure Oxygen font
const oxygen = Oxygen({
  weight: ["300", "400", "700"], // Specify weights you want to use
  subsets: ["latin"],
  variable: "--font-oxygen", // Define a CSS variable for Oxygen
});

export const metadata = {
  title: "Weal BD | Trusted Online Store in Bangladesh",
  description:
    "Weal BD is a trusted online store in Bangladesh offering a wide range of high-quality products at affordable prices with fast delivery and excellent customer service.",
  keywords: [
    "Weal BD",
    "Online Shop BD",
    "Buy online Bangladesh",
    "Best online store BD",
    "Affordable products Bangladesh",
    "Sports  ",
  ],
  authors: [{ name: "Weal BD", url: "https://weal-production.vercel.app/" }],
  creator: "Weal BD Team",
  openGraph: {
    title: "Weal BD | Trusted Online Store in Bangladesh",
    description:
      "Explore Weal BD's vast collection of Sports. Affordable prices, trusted quality, and fast delivery across Bangladesh.",
    url: "https://weal-production.vercel.app/",
    siteName: "Weal BD",
    images: [
      {
        url: "/weal.png", // replace with your actual logo or banner URL
        width: 1200,
        height: 630,
        alt: "Weal BD Logo",
      },
    ],
    locale: "en_BD",
    type: "website",
  },
  icons: {
    icon: "/weal.png",
    shortcut: "/weal.png",
    apple: "/weal.png",
  },
  themeColor: "#0F172A", // Example: navy blue or brand color
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${oxygen.variable}`}>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
