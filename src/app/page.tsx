import { KeunggulanSection } from "./sections/keunggulan"
import { PerkenalanSection } from "./sections/perkenalan"
import { LayananSection } from "./sections/layanan"
import { HeroSection } from "./sections/hero"
import { SlideShow } from "./components/SlideShow"

export default function Home() {
    return (
        <main className="scroll-pt-20">
            <HeroSection />
            <PerkenalanSection />
            <KeunggulanSection />
            <LayananSection />
        </main>
    )
}
