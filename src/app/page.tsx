import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { BentoGridDemo } from "@/components/bento-grid-example"
import { workExperience } from "@/constants/work-experience"
import { ImportantLinks } from "@/constants/important-links"
// import { InfiniteMovingCardsDemo } from "@/components/ui/infinite-moving-cards"

export default function Home() {
  const cards = workExperience.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ))

  return (
    <div className="w-full h-full py-10 md:py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        hi there, {"i'm jordan 👋"}
      </h2>
      <div>
        <p className="max-w-sm md:max-w-7xl pl-4 md:mx-auto mt-4 text-md md:text-lg text-neutral-200 font-sans">
          Software engineering student 📚 @ University of Waterloo 🪿
        </p>
      </div>
      <hr className="hidden md:flex max-w-sm md:max-w-7xl mx-auto border-t-2 border-gray-300 my-4" />
      <div className="mt-5">
        <h3 className="max-w-7xl pl-4 mx-auto text-md font-bold text-neutral-200 font-sans">
          check out my work experience:
        </h3>
        {/* <InfiniteMovingCardsDemo /> */}
        <Carousel items={cards} />
      </div>
      <div className="mt-12">
        <h3 className="max-w-7xl pl-4 mb-6 mx-auto text-md font-bold text-neutral-200 font-sans">
          {"some other things i've worked on:"}
        </h3>
        <BentoGridDemo />
      </div>
      <ImportantLinks />
    </div>
  )
}
