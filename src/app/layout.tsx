import type { Metadata } from "next"
import "./globals.css"
import AppLayout from "@/shared/layout/AppLayout"

export const metadata: Metadata = {
  title: "KHODIM Design Studio",
  description: "Next Generation AI Prompt and Image Studio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  )
}