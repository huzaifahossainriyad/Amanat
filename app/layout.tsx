/**
 * Root Layout
 * Main layout wrapper for the entire application.
 * Includes global styles, fonts, and the custom cursor component.
 */

import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CustomCursor } from '@/components/CustomCursor'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Amanat - Islamic Finance & Debt Manager',
  description:
    'Manage your Amanat (Trust) with transparency. Track personal debts, manage expenses, and embrace Islamic financial principles with our secure, open-source platform.',
  keywords: [
    'Islamic finance',
    'debt management',
    'expense tracker',
    'financial management',
    'Zakat',
    'open source',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amanat.app',
    siteName: 'Amanat',
    title: 'Amanat - Islamic Finance & Debt Manager',
    description:
      'Manage your Amanat (Trust) with transparency. Track personal debts, manage expenses, and embrace Islamic financial principles.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amanat - Islamic Finance & Debt Manager',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amanat - Islamic Finance & Debt Manager',
    description:
      'Manage your Amanat (Trust) with transparency. Track personal debts, manage expenses, and embrace Islamic financial principles.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
