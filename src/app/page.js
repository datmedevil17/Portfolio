"use client";

import { Analytics } from "@vercel/analytics/react";
import House from "./House/House";
import Projects from "./converter/page";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <>
        <title>Raj Rakshit Shukla - Portfolio</title>
        <link

          rel="icon"
          href="./Image.png"
          type="image/x-icon"
        />
      </>

      {/* Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6910980494327419"
        crossOrigin="anonymous"
      />

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V16NP44WSM"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V16NP44WSM');
        `}
      </Script>

    
      {/* <Script id="kofi-widget" strategy="afterInteractive">
        {`
          const script = document.createElement('script');
          script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
          script.onload = () => {
            kofiWidgetOverlay.draw('gregsea', {
              'type': 'floating-chat',
              'floating-chat.donateButton.text': 'Support me',
              'floating-chat.donateButton.background-color': '#00b9fe',
              'floating-chat.donateButton.text-color': '#fff'
            });
          };
          document.head.appendChild(script);
        `}
      </Script> */}

      <main>
        <House />

      </main>
    </>
  );
}
