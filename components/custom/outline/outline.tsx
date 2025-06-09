import React from 'react'

export default function Outline({ children, name }: { children: React.ReactNode, name: string }) {
    return (
        <div
            className='w-48 p-4 hidden lg:inline-flex flex-col justify-start items-start gap-4 sticky top-20'>
            <div
                className='justify-start text-[#FAF3F3] font-semibold tracking-wide'>{name}
            </div>
            <div className='self-stretch h-px bg-[#262626]'/>
            {children}
        </div>
    )
}
