import Image from "next/image"

export function PerkenalanSection() {
    return (
        <section className="container scroll-mt-20" id="perkenalan">
            <div className="my-16 grid grid-cols-2 overflow-hidden rounded shadow-lg">
                <div className="p-12">
                    <p className=" mb-2 text-sm font-black uppercase text-amber-600 ">
                        Selamat Datang di
                    </p>
                    <h1 className="  text-4xl font-black uppercase text-primary">
                        Kantor Hukum
                        <br /> Zulkafli, SH., MH. & Partners!
                    </h1>
                    <div className="mb-8 mt-2 w-12 border-t-8 border-amber-600" />
                    <div className="space-y-4 text-justify text-lg font-medium text-slate-600">
                        <p className=" ">
                            Kami adalah kantor hukum yang berdedikasi untuk memberikan solusi hukum
                            berkualitas tinggi kepada klien-klien kami. Dengan lebih dari belasan
                            tahun pengalaman dalam praktik hukum, kami telah menjadi mitra yang
                            terpercaya dalam menyelesaikan berbagai jenis kasus hukum.
                        </p>
                        <p>
                            Kantor Hukum Zulkafli, SH., MH. & Partners adalah hasil dari visi
                            bersama sekelompok pengacara yang berkomitmen untuk menjalankan praktik
                            hukum dengan etika tinggi, integritas tak tergoyahkan, dan perhatian
                            yang tulus terhadap klien. Kami percaya bahwa setiap individu dan
                            perusahaan berhak mendapatkan perlakuan yang adil di mata hukum, dan
                            itulah yang mendorong kami untuk berjuang keras demi melindungi hak dan
                            kepentingan klien kami.
                        </p>
                    </div>
                </div>
                <div className="relative">
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
