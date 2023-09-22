const jenisKasusHukum = [
    {
        title: "Hukum Keluarga",
        items: [
            "Perceraian",
            "Pemisahan harta bersama",
            "Perwalian anak dan hak asuh.",
            // "Permasalahan waris",
        ],
    },
    // {
    //     title: "Hukum Properti",
    //     items: [
    //         "Pembelian dan penjualan properti.",
    //         "Sengketa kepemilikan dan tuntutan hak properti.",
    //         "Perjanjian sewa-menyewa.",
    //     ],
    // },
    // {
    //     title: "Hukum Bisnis",
    //     items: [
    //         // "Pembentukan perusahaan dan pemberian saran bisnis.",
    //         "Kontrak bisnis dan litigasi komersial.",
    //         // "Kepailitan dan restrukturisasi bisnis.",
    //     ],
    // },
    {
        title: "Hukum Pidana",
        items: [
            "Pertahanan terhadap tuduhan kejahatan.",
            // "Penyelidikan dan perundingan dengan jaksa.",
            "Banding dan upaya hukum lainnya.",
            "Pledoi atau pembelaan",
        ],
    },
    {
        title: "Hukum Kekayaan Intelektual",
        items: [
            "Perlindungan hak cipta, merek dagang, dan paten.",
            "Penegakan hak-hak kekayaan intelektual.",
            "Penyelesaian sengketa hak cipta atau merek dagang.",
        ],
    },
    {
        title: "Hukum Ketenagakerjaan",
        items: [
            "Sengketa ketenagakerjaan.",
            "Perjanjian kerja",
            // "Diskriminasi dan pelecehan di tempat kerja.",
        ],
    },
    {
        title: "Hukum Lingkungan",
        items: [
            "Kepatuhan lingkungan dan izin.",
            "Penegakan peraturan lingkungan.",
            "Tanggung jawab perusahaan terkait kerusakan lingkungan.",
        ],
    },
    // {
    //     title: "Hukum Keimigrasian",
    //     items: [
    //         "Pemohonan visa dan status imigrasi.",
    //         // "Upaya hukum terhadap deportasi.",
    //         "Kewarganegaraan dan pengungsi.",
    //     ],
    // },
    {
        title: "Hukum Waris",
        items: [
            "Pembagian harta warisan.",
            // "Pembuatan wasiat dan perencanaan warisan.",
            "Sengketa warisan dan pengadilan agama.",
        ],
    },
    {
        title: "Hukum Konsumen",
        items: [
            "Perlindungan konsumen dan sengketa konsumen.",
            // "Pertahanan terhadap tuntutan konsumen.",
            "Pelanggaran hak-hak konsumen.",
        ],
    },
    // {
    //     title: "Hukum Teknologi dan Internet",
    //     items: [
    //         "Perjanjian lisensi perangkat lunak dan teknologi.",
    //         "Perlindungan privasi dan keamanan data.",
    //         "Sengketa hukum terkait domain dan situs web.",
    //     ],
    // },
    // {
    //     title: "Hukum Kesehatan",
    //     items: [
    //         "Masalah hukum medis dan pertanggungjawaban.",
    //         "Perjanjian antara penyedia layanan kesehatan.",
    //         // "Isu-isu hukum dalam riset medis.",
    //     ],
    // },
]

export function LayananSection() {
    return (
        <section className="scroll-mt-8 px-8 py-20 md:container" id="layanan">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-black uppercase text-primary">Layanan Kami</h1>
                <p className="text-sm font-semibold text-amber-600">Melayani berbagai kasus</p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {jenisKasusHukum.map((kasus, i) => (
                    <div key={i} className="rounded-md border-2 shadow">
                        <h1 className=" p-2 text-center font-semibold text-primary">
                            {kasus.title}
                        </h1>
                        <div className="mx-auto  border-b-2 border-dotted border-accent" />
                        <ul className="list-disc space-y-2 py-6 pl-10 pr-8 text-sm text-slate-600 marker:text-accent">
                            {kasus.items.map((item, i) => (
                                <li key={i} className="">
                                    {/* <div className="w-2 pt-1.5">
                                        <div className=" h-1.5 w-1.5 rounded-full bg-accent" />
                                    </div>
                                    <p className="">{item}</p> */}
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}
