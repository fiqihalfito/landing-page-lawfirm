import Link from "next/link"

export function Header() {
    return (
        <header className="container flex items-center justify-between py-6">
            <div>Zulkafli, SH., MH. & Partners</div>
            <nav></nav>
            <button className=" rounded-md bg-primary px-4 py-2 text-white">
                Konsultasi sekarang
            </button>
        </header>
    )
}
