"use client";
import * as React from "react";
import { useEffect } from 'react';
import Intro from "./components/Intro";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import Qualities from "./components/Qualities";
import Section from "./utils/section";
import WebFont from 'webfontloader';

export default function Home() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Unica One', 'Chilanka']
      }
    });
   }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between" style={{fontFamily: 'Unica One'}}>
      <Section>
        <Intro />
      </Section>
        <Info />
      <Section>
        <Experience />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <Qualities />
      </Section>
      <Section>
        <SocialMedia />
      </Section>
    </main>
  );
}
