"use client";
import * as React from "react";
import Intro from "./components/Intro";
import Info from "./components/Info";
import Experience from "./components/Experience";
import Proficiency from "./components/Proficiency";
import SocialMedia from "./components/SocialMedia";
import Qualities from "./components/Qualities";
import Section from "./utils/section";
import CustomThemeProvider from "./theme";

export default function Home() {

  return (
    <main className="font-type">
      <CustomThemeProvider>
        <Section>
          <Intro />
        </Section>
        <Info />
        <Section>
          <Proficiency />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section>
          <Qualities />
        </Section>
        <Section>
          <SocialMedia />
        </Section>
      </CustomThemeProvider>
    </main>
  );
}
