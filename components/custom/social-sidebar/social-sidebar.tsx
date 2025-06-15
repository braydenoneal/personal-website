import React from 'react'

export default function SocialSidebar({ children }: { children?: React.ReactNode }) {
    return (
        <div
            className='self-stretch p-4 hidden sm:inline-flex flex-col justify-start items-start gap-4'>
            <div className='flex flex-col justify-center items-start gap-4 sticky top-24'>
                {children}
            </div>
        </div>
    )
}
