"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import './page.scss'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="home-page-container">
      <div className='image-container'>
        <div className='hero-content f-d-col d-f-c'>
          <div className='heading'>Our Helping To The World</div>
          <div className='subheading'>Our Helping To The World</div>
        </div>
      </div>
    </div>
  )
}
