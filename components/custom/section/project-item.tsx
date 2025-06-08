import Link from 'next/link'
import React from 'react'

export default function ProjectItem({ children, name, description, link }: {
    children?: React.ReactNode,
    name: string,
    description: string,
    link: string
}) {
    return (
        <Link href={link} target={'_blank'}
              className='hover:scale-102 duration-150 self-stretch p-4 bg-[#242222] rounded-md flex flex-col justify-start items-start gap-4 overflow-hidden'>
            <div
                className='self-stretch justify-start text-[#FAF3F3] text-sm font-semibold tracking-wide'>{name}
            </div>
            <div
                className='self-stretch justify-start text-[#FAF3F3] text-sm font-normal'>{description}
            </div>
            {children}
        </Link>
    )
}
