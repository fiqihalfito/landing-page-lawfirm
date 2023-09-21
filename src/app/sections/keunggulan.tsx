import { CommitmentIcon } from "@/components/icons/CommitmentIcon"
import { KeunggulanIconRender, SVGIconProp } from "@/components/icons/KeunggulanIconRender"
import { ProvenIcon } from "@/components/icons/ProvenIcon"
import { ImproveIcon } from "@/components/icons/improveIcon"

interface contentProp {
    title: string
    description: string
    Icon: React.FC<SVGIconProp>
}

const content: contentProp[] = [
    {
        title: "Pengalaman dan Kompetensi Tinggi",
        description:
            "Tim kami terdiri dari pengacara-pengacara berpengalaman yang telah menangani berbagai kasus hukum dengan beragam tingkat kompleksitas. Kami memahami nuansa hukum dan memiliki rekam jejak yang kuat dalam mencapai hasil yang memuaskan bagi klien kami.",
        Icon: ImproveIcon,
    },
    {
        title: "Komitmen Terhadap Klien",
        description:
            "Di Kantor Hukum Zulkafli, SH., MH., kami memahami bahwa setiap kasus adalah unik dan memiliki tantangan yang berbeda. Oleh karena itu, kami selalu mendekati setiap klien dengan penuh perhatian dan kepedulian. Kami berusaha untuk memahami kebutuhan dan kekhawatiran klien kami serta menjadikan kepentingan terbaik mereka sebagai prioritas utama.",
        Icon: CommitmentIcon,
    },
    {
        title: "Hasil yang Terbukti",
        description:
            "Keberhasilan kami dalam berbagai kasus adalah bukti komitmen kami terhadap pencapaian hasil yang memuaskan bagi klien kami. Kami menjalankan praktik hukum dengan etika dan integritas yang tinggi, selalu berpegang pada prinsip-prinsip hukum yang berlaku, dan bekerja keras untuk memberikan solusi yang optimal dalam setiap kasus.",
        Icon: ProvenIcon,
    },
]

export function KeunggulanSection() {
    return (
        <section
            className="scroll-mt-20 bg-secondary px-8  pb-28 pt-20 md:container"
            id="keunggulan"
        >
            <h1 className="mb-10 text-center text-3xl font-black uppercase text-primary">
                Keunggulan
            </h1>
            <div className="grid grid-cols-1 gap-y-12 text-center md:grid-cols-3 md:gap-x-28 md:gap-y-0">
                {content.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-y-6">
                        <KeunggulanIconRender
                            key={i}
                            render={({ className }) => <item.Icon className={className} />}
                        />
                        <h1 className="text-xl font-bold text-primary">{item.title}</h1>
                        <p className="text-justify font-medium text-slate-800">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}
