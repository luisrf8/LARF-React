"use client";
import * as React from "react";
import Intro from "./components/Intro";
import Info from "./components/Info";
import Qualities from "./components/Qualities";
import Projects from "./components/Projects";
import SocialMedia from "./components/SocialMedia";
import Section from "./utils/section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Section>
        <Intro />
      </Section>
        <Info />
      <Section>
        <Qualities />
      </Section>
      <Section>
        <Projects />
      </Section>
      <Section>
        <SocialMedia />
      </Section>
    </main>
  );
}
