import Link from 'next/link'
import React from 'react'

export default function OutlineLink({ name, id }: { name: string, id: string }) {
    return (
        <Link href={`#${id}`} className='justify-start text-[#FAF3F3] text-sm font-normal'>{name}</Link>
    )
}
