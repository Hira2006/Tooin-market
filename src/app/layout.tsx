"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import { useState } from 'react'
import Cart from '@/components/Cart'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Tooin',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [showCart, setShowCart] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
        <Header setShowCart={setShowCart}/>
        {showCart && <Cart setShowCart={setShowCart}/>}
        {children}
        <Footer />
        </Provider>
        </body>
    </html>
  )
}