import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Kantor Hukum Zulkafli, SH., MH. & Partners",
    description: "Melayani berbagai jenis hukum",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} `}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
