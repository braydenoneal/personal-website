import ImageHeader from '@/components/custom/image-header/image-header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Projects() {
    return (
        <div className='self-stretch inline-flex flex-col justify-start items-center gap-4'>
            <ImageHeader name={'Projects'}>
                <div className='w-96 py-4 relative flex flex-col justify-center items-center'>
                    <Image src={'/chip.svg'} alt={'Chip'} width={96} height={96}/>
                </div>
            </ImageHeader>
            <div className='relative'>
                <div className='w-[1024px] inline-flex justify-start items-start relative'>
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
                    <div className='flex-1 p-4 inline-flex flex-col justify-start items-start gap-4 top-20'>
                        <div className='self-stretch flex flex-col justify-start items-start gap-4 scroll-mt-24'
                             id={'websites'}>
                            <Link href={'#websites'}
                                  className='self-stretch justify-start text-[#FAF3F3] text-base font-semibold tracking-wide'>Websites
                            </Link>
                            <div className='self-stretch h-px bg-[#262626]'/>
                            <Link href={'https://github.com/braydenoneal'} target={'_blank'}
                                  className='hover:scale-102 duration-150 self-stretch p-4 bg-[#242222] rounded-md flex flex-col justify-start items-start gap-4 overflow-hidden'>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-semibold tracking-wide'>Personal
                                    Website
                                </div>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-normal'>Software
                                    engineering projects, music, and contact info
                                </div>
                                <div className='w-60 h-32 bg-stone-700'/>
                            </Link>
                            <div
                                className='self-stretch p-4 bg-[#242222] rounded-md flex flex-col justify-start items-start gap-4 overflow-hidden'>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-semibold tracking-wide'>Music
                                    Therapy Website
                                </div>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-normal'>Small
                                    Music Therapy business website
                                </div>
                                <div className='w-60 h-32 bg-stone-700'/>
                            </div>
                            <div
                                className='self-stretch p-4 bg-[#242222] rounded-md flex flex-col justify-start items-start gap-4 overflow-hidden'>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-semibold tracking-wide'>University
                                    News Website Backend
                                </div>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-normal'>Admin
                                    panel for the Drury Mirror news website
                                </div>
                                <div className='w-60 h-32 bg-stone-700'/>
                            </div>
                        </div>
                        <div className='self-stretch flex flex-col justify-start items-start gap-4'>
                            <div
                                className='self-stretch justify-start text-[#FAF3F3] text-base font-semibold tracking-wide'>Applications
                            </div>
                            <div className='self-stretch h-px bg-[#262626]'/>
                            <div
                                className='self-stretch p-4 bg-[#242222] rounded-md flex flex-col justify-start items-start gap-4 overflow-hidden'>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-semibold tracking-wide'>Etc.
                                </div>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-normal'>Etc.
                                </div>
                                <div className='w-60 h-32 bg-stone-700'/>
                            </div>
                        </div>
                        <div className='self-stretch flex flex-col justify-start items-start gap-4'>
                            <div
                                className='self-stretch justify-start text-[#FAF3F3] text-base font-semibold tracking-wide'>Applications
                            </div>
                            <div className='self-stretch h-px bg-[#262626]'/>
                            <div
                                className='self-stretch p-4 bg-[#242222] rounded-md flex flex-col justify-start items-start gap-4 overflow-hidden'>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-semibold tracking-wide'>Etc.
                                </div>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-normal'>Etc.
                                </div>
                                <div className='w-60 h-32 bg-stone-700'/>
                            </div>
                        </div>
                        <div className='self-stretch flex flex-col justify-start items-start gap-4'>
                            <div
                                className='self-stretch justify-start text-[#FAF3F3] text-base font-semibold tracking-wide'>Applications
                            </div>
                            <div className='self-stretch h-px bg-[#262626]'/>
                            <div
                                className='self-stretch p-4 bg-[#242222] rounded-md flex flex-col justify-start items-start gap-4 overflow-hidden'>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-semibold tracking-wide'>Etc.
                                </div>
                                <div
                                    className='self-stretch justify-start text-[#FAF3F3] text-sm font-normal'>Etc.
                                </div>
                                <div className='w-60 h-32 bg-stone-700'/>
                            </div>
                        </div>
                    </div>
                    <div
                        className='w-48 self-stretch p-4 inline-flex flex-col justify-start items-start gap-4'>
                        <div className='flex flex-col justify-center items-start gap-4 sticky top-20'>
                            <div className='w-8 h-8 relative overflow-hidden'>
                                <Link href={'https://github.com/braydenoneal'}>
                                    <Image src={'/github.svg'} alt={'Github'} width={32} height={32}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
