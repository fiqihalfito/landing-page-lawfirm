import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Kantor Hukum Zulkafli, SH., MH. & Partners",
    description: "Melayani berbagai jenis hukum",
    metadataBase: new URL("https://pengacarazulkafli.com"),
    alternates: {
        canonical: "/",
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
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
