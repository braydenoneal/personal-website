import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <div className='flex flex-1 justify-center'>
            <div className='w-[1024px] self-stretch inline-flex flex-col justify-center items-center'>
                <div className='self-stretch flex-1 relative'/>
                <div className='inline-flex justify-start items-center gap-8'>
                    <Image className={'rounded-[48px]'} src={'/face.png'} alt={'Face'} width={96} height={96}/>
                    <div className='inline-flex flex-col justify-center items-start gap-4'>
                        <div className='justify-start text-[#FAF3F3] text-2xl font-semibold tracking-wide'>
                            Hi, I’m Brayden O’Neal.
                        </div>
                        <div className='justify-start text-[#FAF3F3] text-2xl font-normal tracking-wide'>
                            I make software and music.
                        </div>
                    </div>
                </div>
                <div className='self-stretch flex-1 relative'/>
                <div className='self-stretch inline-flex flex-wrap justify-between gap-4'>
                    <Link href={'/projects'}
                          className='hover:scale-102 duration-150 p-4 bg-gradient-to-br from-[#211D1D] to-[#2F2B2B] rounded-md outline outline-offset-[-1px] outline-[#262626] inline-flex flex-col justify-start items-center gap-4'>
                        <div className='w-[448px] py-8 relative flex flex-col justify-center items-center'>
                            <Image src={'/chip.svg'} alt={'Chip'} width={192} height={192}/>
                        </div>
                        <div
                            className='self-stretch text-center justify-start text-[#FAF3F3] text-2xl font-semibold'>Projects
                        </div>
                    </Link>
                    <Link href={'/music'}
                          className='hover:scale-102 duration-150 p-4 bg-gradient-to-br from-[#211D1D] to-[#2F2B2B] rounded-md outline outline-offset-[-1px] outline-[#262626] inline-flex flex-col justify-start items-center gap-4'>
                        <div className='h-64 p-8 relative flex flex-col justify-center items-center'>
                            <Image src={'/keys.svg'} alt={'Keys'} width={384} height={384}/>
                        </div>
                        <div
                            className='self-stretch text-center justify-start text-[#FAF3F3] text-2xl font-semibold'>Music
                        </div>
                    </Link>
                </div>
                <div className='self-stretch flex-1 relative'/>
            </div>
        </div>
    )
}
