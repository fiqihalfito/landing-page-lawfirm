import { Phone } from "lucide-react"
import { SlideShow } from "../components/SlideShow"
import { SlideShowIndicator } from "../components/SlideShowIndicator"
import WhatsappButton from "../components/WhatsappButton"

const content = {
    title: "Konsultan Hukum Profesional Siap Membantu Anda",
    description:
        "Kami adalah tim Lawyer berpengalaman dalam menangani berbagai masalah hukum. Hubungi kami untuk membantu permasalahan hukum anda",
}

const images = ["profil.jpg", "palu.jpg", "perpus.jpg", "buku.jpg", "brimob.JPG"]

export function HeroSection() {
    return (
        <section className="relative   md:h-[34rem]">
            <SlideShow images={images} />

            <div className="relative z-10  bg-gradient-to-r from-primary px-8 py-20 md:container md:grid md:h-full md:grid-cols-2 md:py-0">
                {/* col 1 */}
                <div className="flex items-center  text-white">
                    <div className="">
                        <h1 className="mb-4 text-3xl font-black uppercase md:text-5xl">
                            {content.title}
                        </h1>
                        <p className="mb-4 text-sm md:text-lg">{content.description}</p>

                        {/* <button className="flex items-center gap-x-2 rounded-md bg-accent px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-amber-600">
                            <Phone size={20} /> <span>Hubungi Kami</span>
                        </button> */}

                        <WhatsappButton message="Halo, saya tertarik dengan layanan Anda." />
                    </div>
                </div>
                {/* col 2 => coming soon */}
            </div>

            <SlideShowIndicator images={images} />
        </section>
    )
}
