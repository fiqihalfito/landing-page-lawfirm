import { LucideIcon } from "lucide-react"
import Link, { LinkProps } from "next/link"
import { LinkHTMLAttributes } from "react"

interface SocialLinkFooterProp extends LinkProps {
    Icon: LucideIcon
}

export function SocialLinkFooter({ Icon, ...props }: SocialLinkFooterProp) {
    return (
        <Link
            aria-label="sosmed-icon"
            title="sosmed-icon"
            {...props}
            className="group rounded-full  p-2 transition-all duration-200 hover:scale-110 hover:bg-white"
        >
            <Icon className="stroke-white group-hover:stroke-accent" />
        </Link>
    )
}
