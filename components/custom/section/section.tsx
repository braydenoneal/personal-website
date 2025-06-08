import Link from 'next/link'
import React from 'react'

export default function Section({ children, name, id }: { children: React.ReactNode, name: string, id: string }) {
    return (
        <div className='self-stretch flex flex-col justify-start items-start gap-4 scroll-mt-24 pb-4'
             id={id}>
            <Link href={`#${id}`}
                  className='self-stretch justify-start text-[#FAF3F3] text-base font-semibold tracking-wide'>{name}
            </Link>
            <div className='self-stretch h-px bg-[#262626]'/>
            {children}
        </div>
    )
}
