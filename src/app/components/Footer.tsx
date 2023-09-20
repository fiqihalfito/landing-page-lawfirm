import Image from "next/image"
import { SocialLinkFooter } from "./SocialLinkFooter"
import { Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
    return (
        <footer className="container bg-blue-900 pb-4 pt-20">
            <div className="flex items-center justify-between">
                <Image
                    src={"/images/logo.png"}
                    width={100}
                    height={100}
                    alt="logo"
                    className="backdrop-invert"
                />
                <div className="flex items-center justify-between gap-x-8">
                    <SocialLinkFooter href={""} Icon={Phone} />
                    <SocialLinkFooter href={"mailto:zulkafli0106@gmail.com"} Icon={Mail} />
                    <SocialLinkFooter
                        href={"https://www.linkedin.com/in/zulkafli-03a21a27a/"}
                        Icon={Linkedin}
                    />
                </div>
            </div>
            {/* <nav></nav> */}

            <p className="mt-16 text-center text-xs font-extralight  tracking-wide text-slate-200">
                Zulkafli, SH., MH. & Partners &copy; 2023
            </p>
        </footer>
    )
}
