import Image from "next/image"

export function PerkenalanSection() {
    return (
        <section className="scroll-mt-20 px-8 md:container" id="perkenalan">
            <div className="my-8 overflow-hidden rounded shadow-lg md:my-16 md:grid md:grid-cols-2">
                <div className="p-6 md:p-12">
                    <p className="mb-2 text-xs font-black uppercase text-amber-600 md:text-sm ">
                        Selamat Datang di
                    </p>
                    <h1 className="text-2xl  font-black uppercase text-primary md:text-4xl">
                        Kantor Hukum
                        <br /> Zulkafli, SH., MH. & Partners!
                    </h1>
                    <div className="mb-8 mt-2 w-12 border-t-8 border-amber-600" />
                    <div className="space-y-4 text-justify font-medium text-slate-600 md:text-lg">
                        {/* <p className=" ">
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
                        </p> */}
                        <p>
                            Kantor hukum kami bersedia dan siap melayani berbagai konsultasi dan
                            penyelesaian masalah hukum dalam berbagai aspek hukum di Indonesia.
                            Untuk itu, kami senantiasa melakukan update di bidang hukum dan keilmuan
                            dalam memberikan pengayaan atas norma-norma hukum dan teknik penemuan
                            hukum berdasarkan azas ilmu hukum sehingga setiap kajian analisis
                            terhadap berbagai macam permasalahan yang terjadi terbentuk secara
                            komprehensif berdasarkan aturan hukum yang berlaku.
                        </p>
                        <p>
                            <span className="font-bold">Jasa/pelayanan hukum</span> yang dapat
                            diberikan oleh kantor hukum kami secara umum meliputi seluruh aspek
                            hukum sebagai berikut:{" "}
                            <span className="font-bold">
                                bidang pidana, perdata, administrasi negara, dan tata usaha negara.
                            </span>{" "}
                            Secara khusus meliputi bidang pertanahan, ketenagakerjaan, bisnis, harta
                            kekayaan intelektual, perkawinan, properti, legalitas perusahaan,
                            persaingan usaha, dan lain sebagainya.
                        </p>
                        <p>
                            Dalam bidang bisnis, sejak awal mendirikan bisnis maka setiap bisnis
                            yang legal adalah bisnis yang dijalankan oleh perusahaan.
                        </p>
                        <p>
                            Setiap perusahaan harus memiliki dokumen legalitas agar sah dan
                            dibenarkan menurut hukum sehingga dapat menjalankan usahanya. Semua
                            bentuk perusahaan dapat menjalankan kegiatan usahanya jika tidak
                            memiliki dokumen legalitas lengkap.
                        </p>
                        <p>
                            Agar usaha yang dijalankan itu, terjamin kepastian hukum, maka sebaiknya
                            setiap langkah yang akan ditempuh dimintakan dulu advice dari Advokat
                            melalui <i className="font-bold">“legal opinion”</i> bukan memintanya
                            setelah terjadi masalah.
                        </p>
                        <p>
                            Kesuksesan usaha perusahaan pada suatu waktu dapat pula diikuti dengan
                            tindakan curang atau persaingan tidak sehat dari pelaku usaha lain atau
                            kelompok pelaku usaha. Untuk itu, dengan bantuan Tim Advokat kami, dapat
                            membantu perusahaan dalam menyikapi masalah tersebut dan melakukan
                            pelaporan ke KPPU yang wajib didampingi oleh seorang Advokat.
                        </p>
                        <p>
                            Jika perusahaan tidak mampu membayar hutang dan perlu penundaan
                            kewajiban pembayaran hutang maka Kami dapat membantu menyusun langkah
                            penundaan hutang tersebut. Bahkan jika perusahaan akan mengalami pailit,
                            maka berdasarkan UU Kepailitan setiap proses pailit orang atau
                            perusahaan wajib didampingi oleh seorang Advokat.
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
