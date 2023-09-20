import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./NavItem"

interface NavigationProp {
    title: string
    hash: string
}

const navigation: NavigationProp[] = [
    {
        title: "Perkenalan",
        hash: "perkenalan",
    },
    {
        title: "Keunggulan",
        hash: "keunggulan",
    },
    {
        title: "Layanan",
        hash: "layanan",
    },
]

export function Header() {
    return (
        <header className="container sticky top-0 z-[999] flex items-center justify-between bg-white py-6">
            <div className="flex items-center gap-x-2.5">
                <Image alt="logo" src={"/images/logo.png"} width={40} height={40} />
                <div className="-space-y-1.5">
                    <h1 className="text-xl font-black uppercase  text-primary">
                        Zulkafli, SH., MH.
                    </h1>
                    <p className="font-light text-accent">& Partners</p>
                </div>
            </div>

            <nav>
                {navigation.map((item, i) => (
                    <NavItem key={i} href={`#${item.hash}`}>
                        {item.title}
                    </NavItem>
                ))}
            </nav>
            <button className=" rounded-md bg-primary px-4 py-2 text-white">
                Konsultasi sekarang
            </button>
        </header>
    )
}
