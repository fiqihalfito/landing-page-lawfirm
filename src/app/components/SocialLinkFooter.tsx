import { LucideIcon } from "lucide-react"
import Link, { LinkProps } from "next/link"

interface SocialLinkFooterProp extends LinkProps {
    Icon: LucideIcon
}

export function SocialLinkFooter({ Icon, ...props }: SocialLinkFooterProp) {
    return (
        <Link
            {...props}
            className="group rounded-full  p-2 transition-all duration-200 hover:scale-110 hover:bg-white"
        >
            <Icon className="stroke-white group-hover:stroke-accent" />
        </Link>
    )
}
