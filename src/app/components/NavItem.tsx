import Link, { LinkProps } from "next/link"

interface NavItemProp extends LinkProps {
    children: React.ReactNode
}

export function NavItem(prop: NavItemProp) {
    return <Link href={prop.href}>{prop.children}</Link>
}
