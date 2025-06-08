import Link from 'next/link'
import React from 'react'

export default function Outline() {
    return (
        <div className='w-48 p-4 inline-flex flex-col justify-start items-start gap-4 sticky top-20'>
            <div
                className='justify-start text-[#FAF3F3] text-sm font-semibold tracking-wide'>Projects
            </div>
            <div className='self-stretch h-px bg-[#262626]'/>
            <Link href={'#websites'}
                  className='justify-start text-[#FAF3F3] text-sm font-normal'>Websites</Link>
            <div className='justify-start text-[#FAF3F3] text-sm font-normal'>Applications</div>
            <div className='justify-start text-[#FAF3F3] text-sm font-normal'>Artificial
                Intelligence
            </div>
            <div className='justify-start text-[#FAF3F3] text-sm font-normal'>Graphics</div>
            <div className='justify-start text-[#FAF3F3] text-sm font-normal'>Game Development</div>
        </div>
    )
}
