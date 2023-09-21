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
            {/* <nav></nav> */}

            <p className="mt-8 text-center text-xs font-extralight tracking-wide  text-slate-200 md:mt-16">
                Zulkafli, SH., MH. & Partners &copy; 2023
            </p>
        </footer>
    )
}
