const content = {
    hero: {
        title: "Konsultan Hukum Profesional Siap Membantu Anda",
        description:
            "Kami adalah tim pengacara berpengalaman dengan rekam jejak yang kuat dalam menangani berbagai masalah hukum. Hubungi kami sekarang untuk konsultasi gratis",
    },
}

export function HeroSection() {
    return (
        <section className="bg-primary px-8 py-20 md:container md:grid md:h-[34rem] md:grid-cols-2 md:items-center md:py-0">
            <div className="space-y-4 text-white">
                <h1 className="text-3xl font-black uppercase md:text-5xl">{content.hero.title}</h1>
                <p className="text-sm md:text-lg">{content.hero.description}</p>
                <button className="rounded-md bg-accent px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-amber-600">
                    Hubungi Kami
                </button>
            </div>
            <div></div>
        </section>
    )
}
