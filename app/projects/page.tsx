import ImageHeader from '@/components/custom/image-header/image-header'
import Outline from '@/components/custom/outline/outline'
import OutlineLink from '@/components/custom/outline/outline-link'
import ProjectItem from '@/components/custom/section/project-item'
import Section from '@/components/custom/section/section'
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
                    <Outline name={'Projects'}>
                        <OutlineLink id={'websites'} name={'Websites'}/>
                        <OutlineLink id={'applications'} name={'Applications'}/>
                        <OutlineLink id={'artificial-intelligence'} name={'Artificial Intelligence'}/>
                        <OutlineLink id={'graphics'} name={'Graphics'}/>
                        <OutlineLink id={'game-development'} name={'Game Development'}/>
                    </Outline>
                    <div className='flex-1 p-4 inline-flex flex-col justify-start items-start gap-4 top-20'>
                        <Section id={'websites'} name={'Websites'}>
                            <ProjectItem description={'Software engineering projects, music, and contact info'}
                                         link={'https://github.com/braydenoneal'} name={'Personal Website'}/>
                            <ProjectItem description={'Small Music Therapy business website'}
                                         link={'https://github.com/braydenoneal'} name={'Music Therapy Website'}/>
                            <ProjectItem description={'Admin panel for the Drury Mirror news website'}
                                         link={'https://github.com/braydenoneal'}
                                         name={'University News Website Backend'}/>
                        </Section>
                        <Section id={'applications'} name={'Applications'}>
                            <ProjectItem description={'Etc.'} link={''} name={'Etc.'}>
                                <div className='w-60 h-32 bg-stone-700'/>
                            </ProjectItem>
                        </Section>
                        <Section id={'artificial-intelligence'} name={'Artificial Intelligence'}>
                            <ProjectItem description={'Etc.'} link={''} name={'Etc.'}/>
                        </Section>
                        <Section id={'graphics'} name={'Graphics'}>
                            <ProjectItem description={'Etc.'} link={''} name={'Etc.'}/>
                        </Section>
                        <Section id={'game-development'} name={'Game Development'}>
                            <ProjectItem description={'Etc.'} link={''} name={'Etc.'}/>
                        </Section>
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
