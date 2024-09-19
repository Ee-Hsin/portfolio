import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Jordan's Portfolio!",
  description: "I'm a software engineer who loves to build!",
  icons: {
    icon: "/favicon/favicon.ico", // Main favicon
    shortcut: "/favicon/favicon-16x16.png", // Shortcut icon
    apple: "/favicon/apple-touch-icon.png", // Apple touch icon
    other: [
      {
        rel: "icon",
        url: "/favicon/favicon-32x32.png", // Additional favicon sizes
        sizes: "32x32",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-192x192.png", // Android icon
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/favicon/android-chrome-512x512.png", // Android icon
        sizes: "512x512",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
