import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Home() {
    return (
        <div className='flex flex-1 justify-center'>
            <div className='w-[1024px] self-stretch inline-flex flex-col justify-center items-center px-4'>
                <div className='self-stretch flex-1 relative'/>
                <div className='inline-flex justify-start items-center gap-4 md:gap-8'>
                    <Image className={'w-[64px] h-[64px] md:w-[96px] md:h-[96px] rounded-[48px]'} src={'/face.png'}
                           alt={'Face'} width={96} height={96}/>
                    <div className='inline-flex flex-col justify-center items-start gap-4'>
                        <div className='justify-start text-[#FAF3F3] text-lg md:text-2xl font-semibold tracking-wide'>
                            Hi, I’m Brayden O’Neal.
                        </div>
                        <div className='justify-start text-[#FAF3F3] text-lg md:text-2xl font-normal tracking-wide'>
                            I make software and music.
                        </div>
                    </div>
                </div>
                <div className='self-stretch flex-1 relative'/>
                <div className='self-stretch inline-flex flex-wrap justify-center min-[1024px]:justify-between gap-4'>
                    <Link href={'/projects'} className='w-[380px] min-[1024px]:w-[480px] hover:scale-102 duration-150'>
                        <Image alt={'Projects'} src={'/images/home/projects.svg'} width={480} height={333}/>
                    </Link>
                    <Link href={'/music'} className='w-[380px] min-[1024px]:w-[480px] hover:scale-102 duration-150'>
                        <Image alt={'Music'} src={'/images/home/music.svg'} width={480} height={333}/>
                    </Link>
                </div>
                <div className='self-stretch flex-1 relative'/>
            </div>
        </div>
    )
}
