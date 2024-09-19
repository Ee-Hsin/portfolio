// import { cn } from "@/lib/utils"
import React from "react"
import { BentoGrid, BentoGridItem } from "./ui/bento-grid"
import Image from "next/image"

export function BentoGridDemo() {
  return (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
        //   className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          link={item.link ? item.link : "#"}
        />
      ))}
    </BentoGrid>
  )
}

const items = [
  {
    title: "Tangled",
    description: "Winner of the Hack The North WebSummit challenge!",
    header: (
      <Image
        src="/images/tangled.png"
        alt="a picture of tangled"
        layout="responsive"
        width={300} // Optional, used to define the aspect ratio
        height={300} // Optional, used to define the aspect ratio
        className="rounded-lg" // You can use rounded, rounded-lg, rounded-full, etc.
      />
    ),
    link: "https://www.connectthenorth.co/",
  },
  {
    title: "Ouffix",
    description: "Manage your wardrobe with ease and style",
    header: (
      <Image
        src="/images/ouffix (1).png"
        alt="a picture of ouffix"
        layout="responsive"
        width={300}
        height={300}
        className="rounded-lg" // You can use rounded, rounded-lg, rounded-full, etc.
      />
    ),
    link: "https://www.ouffix.com/",
  },
  {
    title: "w2d (in progress)",
    description: "swipe to find crowd-sourced activities for when you travel",
    header: (
      <Image
        src="/images/w2d.png"
        alt="a picture of w2d"
        layout="responsive"
        width={300}
        height={300}
        className="rounded-lg" // You can use rounded, rounded-lg, rounded-full, etc.
      />
    ),
    link: "https://w2d.app/",
  },
  {
    title: "Investing",
    description: "I enjoy learning and writing about long term investing",
    header: (
      <Image
        src="/images/jordanip.png"
        alt="a picture of jordan's investment portfolio site"
        layout="responsive"
        width={300}
        height={300}
        className="rounded-lg" // You can use rounded, rounded-lg, rounded-full, etc.
      />
    ),
    link: "https://jordanip.com/",
  },
  {
    title: "Content Creation",
    description: "I make engaging content on TikTok and Youtube!",
    header: (
        <Image
          src="/images/tiktok.png"
          alt="a picture of @jorleebee on tiktok"
          layout="responsive"
          width={300}
          height={300}
          className="rounded-lg" // You can use rounded, rounded-lg, rounded-full, etc.
        />
      ),
    link: "https://www.tiktok.com/@jorleebee",
  },
  {
    title: "national service",
    description: "served 2 years in the singapore army 🪖 🫡 😭",
    header: ( 
        <Image
          src="/images/singaporeArmy.png"
          alt="a picture of my singapore army experience"
          layout="responsive"
          width={300}
          height={300}
          className="rounded-lg" // You can use rounded, rounded-lg, rounded-full, etc.
        />
      ),
  },
]
