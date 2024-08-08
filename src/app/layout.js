import { Inter } from "next/font/google";
import "./globals.css";
import image from "../../public/image.png";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BuildIt",
  description:
    "Application that helps you build your habits and shape your life",
  keywords: "habit tracker, habits, minimal habit tracker",
  openGraph: {
    title: "BuildIt",
    description:
      "Application that helps you build your habits and shape your life",
    url: "https://buildit-habitracker.netlify.app/",
    images: [
      {
        url: image.src,
        width: 1200,
        height: 630,
        alt: "BuildIt - Habit Tracker",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuildIt",
    description:
      "Application that helps you build your habits and shape your life",
    images: [{ url: image.src }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
