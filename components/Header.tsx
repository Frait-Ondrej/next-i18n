// components/Header.tsx
'use client'
import Link from 'next-intl/link';
import { useTranslations } from 'next-intl'
import LocaleSwitcher from './LocaleSwitcher';

export default function Header() {
    const t = useTranslations('Header')
    return (
        <header className="bg-gray-200 shadow flex">
            <nav className="container flex px-2 py-2 gap-5 ">
                <Link href="/">{t('home')}</Link>
                <Link href="/about">{t('about')}</Link>
                <Link href="/services/app">{t('about')}</Link>
            </nav>
            <LocaleSwitcher />
        </header>
    )
}