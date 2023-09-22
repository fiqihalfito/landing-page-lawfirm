import { Phone } from "lucide-react"
import { SlideShow } from "../components/SlideShow"
import { SlideShowIndicator } from "../components/SlideShowIndicator"

const content = {
    title: "Konsultan Hukum Profesional Siap Membantu Anda",
    description:
        "Kami adalah tim pengacara berpengalaman dalam menangani berbagai masalah hukum. Hubungi kami untuk membantu permasalahan hukum anda",
}

const images = ["profil.jpg", "palu.jpg", "perpus.jpg", "buku.jpg"]

export function HeroSection() {
    return (
        <section className="relative   md:h-[34rem]">
            <SlideShow images={images} />

            <div className="relative z-10  bg-gradient-to-r from-primary px-8 py-20 md:container md:grid md:h-full md:grid-cols-2 md:py-0">
                {/* col 1 */}
                <div className="flex items-center  text-white">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-black uppercase md:text-5xl">
                            {content.title}
                        </h1>
                        <p className="text-sm md:text-lg">{content.description}</p>
                        <button className="flex items-center gap-x-2 rounded-md bg-accent px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-amber-600">
                            <Phone size={20} /> <span>Hubungi Kami</span>
                        </button>
                    </div>
                </div>
                {/* col 2 => coming soon */}
            </div>

            <SlideShowIndicator images={images} />
        </section>
    )
}
