"use client";
import Image from 'next/image'
import * as React from 'react';
import card from './utils/card_info'
import Divider from '@mui/material/Divider';
import Intro from './components/Intro'
import Info from './components/Info'
import Qualities from './components/Qualities'
import Projects from './components/Projects'
import SocialMedia from './components/SocialMedia'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Intro/>
        <Info/>
        <Qualities/>
        <Projects/>
        <SocialMedia/> 
    </main>
  )
}
