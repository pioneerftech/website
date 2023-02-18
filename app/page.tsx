"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import './page.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="home-page-container">
      <div className='heading'>
        Home
      </div>
    </div>
  )
}
