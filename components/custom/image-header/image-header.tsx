import React from 'react'

export default function ImageHeader({ children, name }: { children: React.ReactNode, name: string }) {
    return (
        <div
            className='self-stretch p-4 bg-gradient-to-br from-[#211D1D] to-[#2F2B2B] border-b border-[#262626] flex flex-col justify-start items-center gap-4'>
            {children}
            <div
                className='self-stretch text-center justify-start text-[#FAF3F3] text-base font-semibold'>{name}
            </div>
        </div>
    )
}
