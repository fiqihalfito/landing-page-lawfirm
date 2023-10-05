import Link, { LinkProps } from "next/link"

interface NavItemProp extends LinkProps {
    children: React.ReactNode
}

export function NavItem(prop: NavItemProp) {
    return (
        <Link
            href={prop.href}
            className="rounded-full bg-secondary/50 px-4 py-1 font-medium tracking-wide text-primary hover:bg-amber-600 hover:text-white active:bg-accent"
        >
            {prop.children}
        </Link>
    )
}
