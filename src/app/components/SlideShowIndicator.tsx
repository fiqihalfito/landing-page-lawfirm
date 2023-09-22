"use client"

import { useSlideShow } from "@/hooks/useSlideShow"
import { cn } from "@/lib/utils/cn"

export function SlideShowIndicator({ images }: { images: string[] }) {
    const { currentImage } = useSlideShow(images)

    return (
        <div className="absolute bottom-6 left-1/2 z-10 mx-auto flex -translate-x-1/2 items-center gap-x-4">
            {images.map((item, i) => (
                <div
                    key={i}
                    className={cn(
                        "h-2 w-2 rounded-full ",
                        currentImage === i ? "bg-white" : "bg-slate-400"
                    )}
                />
            ))}
        </div>
    )
}
