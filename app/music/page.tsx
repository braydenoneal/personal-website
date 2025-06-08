import ImageHeader from '@/components/custom/image-header/image-header'
import Outline from '@/components/custom/outline/outline'
import OutlineLink from '@/components/custom/outline/outline-link'
import ProjectItem from '@/components/custom/section/project-item'
import Section from '@/components/custom/section/section'
import SocialLink from '@/components/custom/social-sidebar/social-link'
import SocialSidebar from '@/components/custom/social-sidebar/social-sidebar'
import Video from '@/components/custom/video/video'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Projects() {
    return (
        <div className='self-stretch inline-flex flex-col justify-start items-center gap-4'>
            <ImageHeader name={'Music'}>
                <div className='w-[242px] py-4 relative flex flex-col justify-center items-center'>
                    <Image src={'/keys.svg'} alt={'Keys'} width={242} height={96}/>
                </div>
            </ImageHeader>
            <div className='relative'>
                <div className='w-[1024px] inline-flex justify-start items-start relative'>
                    <Outline name={'Music'}>
                        <OutlineLink id={'social-media'} name={'Social Media'}/>
                        <OutlineLink id={'song-demos'} name={'Song Demos'}/>
                        <OutlineLink id={'live-performances'} name={'Live Performances'}/>
                    </Outline>
                    <div className='flex-1 p-4 inline-flex flex-col justify-start items-start gap-4 top-20'>
                        <Section id={'social-media'} name={'Social Media'}>
                            <div className='self-stretch inline-flex justify-start items-center gap-8'>
                                <Link href={'https://www.youtube.com/@braydenoneal'} target={'_blank'}>
                                    <Image alt={'YouTube'} src={'/images/social/color/youtube.svg'} width={40}
                                           height={40}/>
                                </Link>
                                <Link href={'https://www.facebook.com/brayden.oneal.73/'} target={'_blank'}>
                                    <Image alt={'Instagram'} src={'/images/social/color/instagram.svg'} width={40}
                                           height={40}/>
                                </Link>
                                <Link href={'https://www.facebook.com/brayden.oneal.73/'} target={'_blank'}>
                                    <Image alt={'Facebook'} src={'/images/social/color/facebook.svg'} width={40}
                                           height={40}/>
                                </Link>
                            </div>
                        </Section>
                        <Section id={'song-demos'} name={'Song Demos'}>
                            <Video videoId={'jJrLvSG2Lqw'}/>
                            <Video videoId={'AQPJ-J23vFc'}/>
                            <Video videoId={'Ms3USCQtT8c'}/>
                            <Video videoId={'miBialdtEiM'}/>
                            <Video videoId={'Xdwo6W1eg3k'}/>
                            <Video videoId={'EnYLOq_LAew'}/>
                            <Video videoId={'7JFZN4-ln_E'}/>
                            <Video videoId={'YSCsHUvvBtQ'}/>
                            <Video videoId={'VazwZMGKlj0'}/>
                            <Video videoId={'4mJ4EtZ7ppM'}/>
                            <Video videoId={'EENAg5auoKY'}/>
                            <Video videoId={'yFthsifIWFw'}/>
                        </Section>
                        <Section id={'live-performances'} name={'Live Performances'}>
                            <ProjectItem description={'Etc.'} link={''} name={'Etc.'}/>
                        </Section>
                    </div>
                    <SocialSidebar>
                        <SocialLink alt={'YouTube'} link={'https://www.youtube.com/@braydenoneal'}
                                    src={'/images/social/monochrome/youtube.svg'}/>
                        {/*TODO: Instagram link*/}
                        <SocialLink alt={'Instagram'} link={'https://www.facebook.com/brayden.oneal.73/'}
                                    src={'/images/social/monochrome/instagram.svg'}/>
                        <SocialLink alt={'Facebook'} link={'https://www.facebook.com/brayden.oneal.73/'}
                                    src={'/images/social/monochrome/facebook.svg'}/>
                    </SocialSidebar>
                </div>
            </div>
        </div>
    )
}
