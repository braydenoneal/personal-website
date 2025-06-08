import Image from 'next/image'
import React from 'react'

export default function ProjectImage({ src, alt }: { src: string, alt: string }) {
    return (
        <Image alt={alt} src={src} width={341} height={192}/>
    )
}
