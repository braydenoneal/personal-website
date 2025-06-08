import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SocialLink({ link, src, alt }: { link: string, src: string, alt: string }) {
    return (
        <div className='w-8 h-8 relative overflow-hidden'>
            <Link href={link} target={'_blank'}>
                <Image src={src} alt={alt} width={32} height={32}/>
            </Link>
        </div>
    )
}
