const content = {
    hero: {
        title: "Konsultan Hukum Profesional Siap Membantu Anda",
        description:
            "Kami adalah tim pengacara berpengalaman dengan rekam jejak yang kuat dalam menangani berbagai masalah hukum. Hubungi kami sekarang untuk konsultasi gratis",
    },
}

export function HeroSection() {
    return (
        <section className="container grid h-[30rem] grid-cols-2 items-center bg-primary">
            <div className="space-y-4 text-white">
                <h1 className="text-5xl font-black uppercase">{content.hero.title}</h1>
                <p className="text-lg">{content.hero.description}</p>
                <button className="rounded-md bg-accent px-8 py-4 font-semibold transition-all duration-300 ease-in-out hover:scale-105 hover:bg-amber-600">
                    Hubungi Kami
                </button>
            </div>
        </section>
    )
}
