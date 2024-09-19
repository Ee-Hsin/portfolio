import { Carousel, Card } from "@/components/ui/apple-cards-carousel"
import { BentoGridDemo } from "@/components/bento-grid-example"
import { workExperience } from "@/constants/work-experience"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const ImportantLinks = () => {
  return (
    <div className="mt-12 flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:justify-center md:space-x-6">
      {/* GitHub Link */}
      <a
        href="https://github.com/Ee-Hsin"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-neutral-200"
      >
        <FaGithub className="h-6 w-6" />
        <span>GitHub</span>
      </a>
      {/* Resume Download Button */}
      <a
        href="/files/jordan-kok-resume.pdf" // Link to your resume file in the public folder
        download
        className="px-6 py-2 bg-purple-500 text-white rounded-lg  transition"
      >
        Download Resume
      </a>
      {/* LinkedIn Link */}
      <a
        href="https://linkedin.com/in/jkok03"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-neutral-200"
      >
        <FaLinkedin className="h-6 w-6" />
        <span>LinkedIn</span>
      </a>
    </div>
  )
}
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
