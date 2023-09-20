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
            <div>Zulkafli, SH., MH. & Partners</div>
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
