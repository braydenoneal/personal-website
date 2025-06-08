import ImageHeader from '@/components/custom/image-header/image-header'
import Outline from '@/components/custom/outline/outline'
import OutlineLink from '@/components/custom/outline/outline-link'
import ProjectImage from '@/components/custom/section/project-image'
import ProjectItem from '@/components/custom/section/project-item'
import Section from '@/components/custom/section/section'
import SocialLink from '@/components/custom/social-sidebar/social-link'
import SocialSidebar from '@/components/custom/social-sidebar/social-sidebar'
import Image from 'next/image'
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
                                         link={'https://github.com/braydenoneal/personal-website'}
                                         name={'Personal Website'}>
                                <ProjectImage alt={'Personal website'} src={'/images/projects/personal-website.png'}/>
                            </ProjectItem>
                            <ProjectItem description={'Small Music Therapy business website'}
                                         link={'https://www.garnermusictherapyllc.com/'}
                                         name={'Music Therapy Website'}>
                                <ProjectImage alt={'Garner Music Therapy'}
                                              src={'/images/projects/garner-music-therapy.png'}/>
                            </ProjectItem>
                            <ProjectItem description={'Admin panel for the Drury Mirror news website'}
                                         link={'https://github.com/drury-mirror/drury-mirror'}
                                         name={'University News Website Backend'}>
                                <ProjectImage alt={'Drury Mirror'}
                                              src={'/images/projects/drury-mirror.png'}/>
                            </ProjectItem>
                        </Section>
                        <Section id={'applications'} name={'Applications'}>
                            <ProjectItem description={'Etc.'} link={''} name={'Etc.'}/>
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
                    <SocialSidebar>
                        <SocialLink alt={'Github'} link={'https://github.com/braydenoneal'}
                                    src={'/images/social/monochrome/github.svg'}/>
                    </SocialSidebar>
                </div>
            </div>
        </div>
    )
}
