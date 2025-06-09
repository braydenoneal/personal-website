import { ThemeProvider } from '@/components/theme-provider'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from '@/components/ui/navigation-menu'
import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const inter = localFont({
    variable: '--font-inter',
    src: '../public/inter-variable.otf',
})

export const metadata: Metadata = {
    title: 'Brayden O\'Neal',
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
        <body
            className={`${inter.className} antialiased min-h-screen relative flex flex-none flex-col`}>
        <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            disableTransitionOnChange
        >
            <header className={'sticky h-16 top-0 border-b bg-[#171615] border-[#262626] z-10'}>
                <div className={'h-16 flex items-center justify-between mx-auto max-w-[1024px] px-4'}>
                    <Link className={'flex gap-4 items-center font-medium text-sm text-nowrap'}
                          href={'/'}>
                        <Image src={'/logo.svg'} alt={'Logo'} width={32} height={32}/>
                        Brayden O’Neal
                    </Link>
                    <NavigationMenu>
                        <NavigationMenuList className={'font-semibold text-sm'}>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild><Link href='/projects'
                                                                  passHref>Projects</Link></NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild><Link href='/music'
                                                                  passHref>Music</Link></NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild><Link href='/contact'
                                                                  passHref>Contact</Link></NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </header>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
