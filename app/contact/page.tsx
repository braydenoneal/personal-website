import Image from 'next/image'
import React from 'react'

export default function Contact() {
    return (
        <div className='flex justify-center items-center flex-1'>
            <div className='inline-flex items-center justify-center gap-8 overflow-hidden'>
                <Image className={'rounded-[256px] w-[96px] h-[96px] md:w-[151px] md:h-[151px]'}
                       alt={'Brayden O\'Neal'} src={'/face.png'}
                       width={151} height={151}/>
                <div className='inline-flex flex-col justify-center items-start gap-4'>
                    <div
                        className='justify-start text-[#FAF3F3] text-xl md:text-3xl font-semibold tracking-wider'>Brayden
                        O’Neal
                    </div>
                    <div className='flex flex-col justify-start items-start gap-3'>
                        <div className='inline-flex justify-start items-center gap-2'>
                            <div className='w-6 h-6 relative overflow-hidden'>
                                <Image alt={'Mail'} src={'/images/icons/mail.svg'} width={24} height={24}/>
                            </div>
                            <div
                                className='justify-center text-[#FAF3F3] text-xs md:text-sm font-normal'>braydenioneal@gmail.com
                            </div>
                        </div>
                        <div className='inline-flex justify-start items-center gap-2'>
                            <div className='w-6 h-6 relative overflow-hidden'>
                                <Image alt={'Phone'} src={'/images/icons/phone.svg'} width={24} height={24}/>
                            </div>
                            <div className='justify-center text-[#FAF3F3] text-xs md:text-sm font-normal'>(417)
                                719-8576
                            </div>
                        </div>
                        <div className='inline-flex justify-start items-center gap-2'>
                            <div className='w-6 h-6 relative overflow-hidden'>
                                <Image alt={'Location'} src={'/images/icons/location.svg'} width={24} height={24}/>
                            </div>
                            <div
                                className='justify-center text-[#FAF3F3] text-xs md:text-sm font-normal'>Springfield,
                                MO
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
