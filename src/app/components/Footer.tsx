import Image from "next/image"
import { SocialLinkFooter } from "./SocialLinkFooter"
import { Linkedin, Mail, Phone } from "lucide-react"
import Logo from "public/images/logo.png"

export function Footer() {
    return (
        <footer className="bg-blue-900 px-4 pb-4 pt-8 md:container md:pt-20">
            <div className="flex items-center justify-between">
                <div className="relative h-14 w-14 md:h-[100px] md:w-[100px]">
                    <Image
                        src={Logo}
                        // src={"/images/logo.png"}
                        // width={100}
                        // height={100}
                        // fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt="logo"
                        className="backdrop-invert"
                    />
                </div>

                <div className="flex items-center justify-between gap-x-2 md:gap-x-8">
                    <SocialLinkFooter href={""} Icon={Phone} />
                    <SocialLinkFooter href={"mailto:zulkafli0106@gmail.com"} Icon={Mail} />
                    <SocialLinkFooter
                        href={"https://www.linkedin.com/in/zulkafli-03a21a27a/"}
                        Icon={Linkedin}
                    />
                </div>
            </div>

            <div className="mt-8 text-white">
                <h1 className="mb-4 text-3xl font-bold">Alamat</h1>
                <ul className="space-y-4">
                    <li>
                        <h2 className="font-semibold">Depok</h2>
                        <p>Jl. Komjen Pol. M. Jasin Kelapadua Cimanggis - Depok</p>
                        <p>Telp. (021) 87707911</p>
                    </li>
                    <li>
                        <h2 className="font-semibold">Lampung Selatan</h2>
                        <p>
                            Jl. Raya Bumi Sari Samping Pabrik Wong Coco Kec. Natar Kab. Lampung
                            Selatan{" "}
                        </p>
                        <p>Telp. 0812 8184 9999</p>
                    </li>
                    <li>
                        <h2 className="font-semibold">Palembang</h2>
                        <p>
                            Griya Palem Kencana Kel. Talang Kelapa Kec. Alang-Alang Lebar Kota
                            Palembang
                        </p>
                        <p>Telp. 0812 8184 9999</p>
                    </li>
                </ul>
            </div>
            {/* <nav></nav> */}

            <p className="mt-8 text-center text-xs font-extralight tracking-wide  text-slate-200 md:mt-16">
                Zulkafli, SH., MH. & Partners &copy; 2023
            </p>
        </footer>
    )
}
