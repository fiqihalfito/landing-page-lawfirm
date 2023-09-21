"use client"

import Image from "next/image"
import { NavItem } from "./NavItem"
import { NavDropDown } from "./NavDropDown"
import { useState } from "react"
import { MenuIcon, X } from "lucide-react"

interface NavigationProp {
    title: string
    hash: string
}

export const navigation: NavigationProp[] = [
    {
        title: "Perkenalan",
        hash: "#perkenalan",
    },
    {
        title: "Keunggulan",
        hash: "#keunggulan",
    },
    {
        title: "Layanan",
        hash: "#layanan",
    },
]

export function Header() {
    const [openNavDrop, setOpenNavDrop] = useState(false)

    function handleNavDrop() {
        setOpenNavDrop((prev) => !prev)
    }

    return (
        <div className="sticky top-0 z-[999]">
            <header className=" flex items-center justify-between bg-white px-4 py-6 md:container">
                <div className="flex items-center gap-x-2.5">
                    <Image alt="logo" src={"/images/logo.png"} width={40} height={40} />
                    <div className="-space-y-0.5 md:-space-y-1.5">
                        <h1 className=" font-black uppercase text-primary  md:text-xl">
                            Zulkafli, SH., MH.
                        </h1>
                        <p className="text-sm font-light text-accent md:text-base">& Partners</p>
                    </div>
                </div>

                <nav className="hidden md:block">
                    {navigation.map((item, i) => (
                        <NavItem key={i} href={item.hash}>
                            {item.title}
                        </NavItem>
                    ))}
                </nav>
                <button className=" hidden rounded-md bg-primary px-4 py-2 text-white md:block">
                    Konsultasi sekarang
                </button>
                <button className="md:hidden" onClick={handleNavDrop}>
                    {!openNavDrop ? <MenuIcon /> : <X />}
                </button>
            </header>
            {openNavDrop && <NavDropDown handleNavDrop={handleNavDrop} />}
        </div>
    )
}
