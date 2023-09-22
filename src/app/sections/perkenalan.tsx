import Image from "next/image"

export function PerkenalanSection() {
    return (
        <section className="scroll-mt-20 px-8 md:container" id="perkenalan">
            <div className="my-8 overflow-hidden rounded shadow-lg md:my-16 md:grid md:grid-cols-2">
                <div className="p-12">
                    <p className="mb-2 text-xs font-black uppercase text-amber-600 md:text-sm ">
                        Selamat Datang di
                    </p>
                    <h1 className="text-2xl  font-black uppercase text-primary md:text-4xl">
                        Kantor Hukum
                        <br /> Zulkafli, SH., MH. & Partners!
                    </h1>
                    <div className="mb-8 mt-2 w-12 border-t-8 border-amber-600" />
                    <div className="space-y-4 text-justify font-medium text-slate-600 md:text-lg">
                        <p className=" ">
                            Kami adalah kantor hukum yang berdedikasi untuk memberikan solusi hukum
                            kepada klien. Dengan pengalaman dalam praktik hukum, kami telah menjadi
                            mitra yang terpercaya dalam menyelesaikan berbagai jenis kasus hukum.
                        </p>
                        <p>
                            <span className="font-bold text-primary">
                                Kantor Hukum Zulkafli, SH., MH. & Partners
                            </span>{" "}
                            adalah hasil dari visi bersama sekelompok pengacara yang berkomitmen
                            untuk menjalankan praktik hukum dengan beretika, berintegritas, dan
                            perhatian yang tulus terhadap klien. Kami percaya bahwa setiap individu
                            dan perusahaan berhak mendapatkan perlakuan yang adil di mata hukum, dan
                            itulah yang mendorong kami untuk berjuang demi melindungi hak dan
                            kepentingan klien kami.
                        </p>
                    </div>
                </div>
                <div className="relative hidden md:block">
                    <Image
                        src={"/images/court-1.jpg"}
                        fill
                        alt="ruang sidang"
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>
        </section>
    )
}
