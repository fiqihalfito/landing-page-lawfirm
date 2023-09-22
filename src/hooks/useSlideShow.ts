"use client"

import { useEffect, useState } from "react"

export const useSlideShow = (initialImages: string[]) => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % initialImages.length)
        }, 3000)

        return () => {
            clearInterval(interval)
        }
    }, [initialImages])

    const percent = currentImage * 100
    const movement = `-translate-x-[${percent}%]`

    return { movement, currentImage }
}
