"use client"

import { useSlideShow } from "@/hooks/useSlideShow"
import { cn } from "@/lib/utils/cn"
import Image from "next/image"

interface SlideShowProp {
    images: string[]
}

export function SlideShow({ images }: SlideShowProp) {
    const { currentImage, movement } = useSlideShow(images)

    return (
        <div className="absolute top-0 z-0 flex h-full w-full items-center overflow-hidden">
            {images.map((item, i) => (
                <div
                    key={i}
                    className={cn(
                        "relative h-full min-w-full  bg-primary transition-all duration-500 ease-in-out"
                    )}
                    style={{ transform: `translateX(${currentImage * -100}%)` }}
                >
                    <Image
                        src={`/images/hero/${item}`}
                        alt="hero-image"
                        fill
                        // width={100}
                        // height={100}
                        style={{ objectFit: "cover" }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        // className="w-10"
                    />
                </div>
            ))}
        </div>
    )
}
