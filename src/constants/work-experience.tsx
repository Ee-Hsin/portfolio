import { FaReact } from "react-icons/fa"
import { TbBrandReactNative } from "react-icons/tb"
import {
  SiTypescript,
  SiRedux,
  SiPrisma,
  SiChakraui,
  SiTailwindcss,
  SiNodedotjs,
} from "react-icons/si"
import { FaGolang, FaJenkins, FaDocker, FaPython } from "react-icons/fa6"
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5"

export const workExperience = [
  {
    category: "Dandelion Networks",
    title: "Mobile Developer",
    src: "/images/iPhone-image.jpg",
    soundBite: "Developed a secure wallet app for blockchain transactions",
    linkedinLink: "https://www.linkedin.com/company/dandelionnetworks/",
    content: (
      <div>
        <p className="text-sm text-gray-500">May 2024 - Aug 2024 | Toronto</p>

        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>
            Implemented authentication, push notifications, and auto-lock timers
            using <strong className="text-blue-400">React Native</strong>,{" "}
            <strong className="text-yellow-500">TypeScript</strong> &{" "}
            <strong className="text-red-400">Redux</strong>
          </li>
          <li>
            Optimized wallet import feature, reducing required backend calls by{" "}
            <strong className="text-green-600">70%</strong> to significantly
            improve performance
          </li>
          <li>
            Encrypted contact backups with a proprietary algorithm, improving
            security in {"Dandelion's"}{" "}
            <strong className="text-fuchsia-500">Web3</strong> environment
          </li>
          <li>
            Developed a request expiration feature, implementing frontend checks
            and backend validation using{" "}
            <strong className="text-purple-300">GoLang</strong> to prevent the
            acceptance of expired token requests; wrote and integrated tests
            into the <strong className="text-amber-600">Jenkins CI/CD</strong>{" "}
            pipeline
          </li>
        </ul>

        {/* Skills Row */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded flex items-center">
            React Native <TbBrandReactNative className="text-blue-500 ml-1" />
          </span>
          <span className="bg-white text-yellow-500  px-2 py-1 rounded flex items-center">
            TypeScript <SiTypescript className="text-blue-500 ml-1" />
          </span>
          <span className="bg-red-100 text-red-500 px-2 py-1 rounded flex items-center">
            Redux <SiRedux className="text-red-500 ml-1" />
          </span>
          <span className="bg-purple-100 text-purple-500 px-2 py-1 rounded flex items-center">
            GoLang <FaGolang className="text-purple-500 ml-1" />
          </span>
          <span className="bg-blue-100 text-blue-500 px-2 py-1 rounded flex items-center">
            Jenkins <FaJenkins className="text-blue-500 ml-1" />
          </span>
        </div>
      </div>
    ),
  },
  {
    category: "UW Blueprint (non-profit)",
    title: "Project Developer",
    src: "/images/charity-image.jpg",
    linkedinLink: "https://www.linkedin.com/company/uw-blueprint/",
    soundBite: "Building a portal for donation management and impact tracking",
    content: (
      <div>
        <p className="text-sm text-gray-500">May 2024 - Present | Waterloo</p>

        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>
            Built a portal for a non-profit to simplify the donation process for
            over <strong className="text-green-600">200</strong> donors using{" "}
            <strong className="text-blue-500">React</strong> and{" "}
            <strong className="text-yellow-500">TypeScript</strong>
          </li>
          <li>
            Leveraged <strong className="text-purple-500">Prisma ORM</strong> to
            efficiently manage donations, user profiles, and impact tracking
            data
          </li>
          <li>
            Created responsive navbar and table components with{" "}
            <strong className="text-pink-500">Chakra UI</strong> to enhance the
            user experience across devices
          </li>
          <li>
            Containerized the web app using{" "}
            <strong className="text-blue-500">Docker</strong> to create uniform
            development environments for consistent deployment
          </li>
        </ul>

        {/* Skills Row */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex flex-row justify-center items-center">
            React <FaReact className="text-blue-500 ml-1" />
          </span>
          <span className="bg-white text-yellow-500  px-2 py-1 rounded flex items-center">
            TypeScript <SiTypescript className="text-blue-500 ml-1" />
          </span>
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded flex items-center">
            Prisma ORM <SiPrisma className="text-purple-500 ml-1" />
          </span>
          <span className="bg-pink-200 text-pink-600 px-2 py-1 rounded flex items-center">
            Chakra UI <SiChakraui className="text-pink-500 ml-1" />
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center">
            Docker <FaDocker className="text-blue-500 ml-1" />
          </span>
        </div>
      </div>
    ),
  },
  {
    category: "Speer Education",
    title: "Software Developer",
    src: "/images/laptop-image.jpg",
    soundBite: "designed a networking app for high-school students",
    content: (
      <div>
        <p className="text-sm text-gray-500">
          April 2021 - July 2021 | Singapore
        </p>

        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>
            Collaborated with a cross-functional team to develop a networking
            app with dynamic post feeds, user connections, and profile
            management with <strong className="text-red-300">CRUD</strong>{" "}
            operations to connect{" "}
            <strong className="text-green-600">200+</strong> high-school
            students with college mentors
          </li>
          <li>
            Achieved <strong className="text-orange-500">real-time</strong>{" "}
            messaging using{" "}
            <strong className="text-orange-300">Firebase</strong> snapshot
            listeners for over <strong className="text-green-600">150+</strong>{" "}
            conversations, enabling users to exchange text, files, and images
            instantly, with immediate message updates and notifications
          </li>
          <li>
            Established a responsive frontend with{" "}
            <strong className="text-blue-500">React</strong>,{" "}
            <strong className="text-yellow-500">JavaScript</strong>, and{" "}
            <strong className="text-blue-300">Tailwind CSS</strong>; and a
            backend using <strong className="text-green-700">Node.js</strong>
          </li>
        </ul>

        {/* Skills Row */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center">
            React <FaReact className="text-blue-500 ml-1" />
          </span>
          <span className="bg-white text-yellow-600 px-2 py-1 rounded flex items-center">
            JavaScript <IoLogoJavascript className="text-yellow-500 ml-1" />
          </span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center">
            Tailwind CSS <SiTailwindcss className="text-blue-500 ml-1" />
          </span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded flex items-center">
            Node.js <SiNodedotjs className="text-green-500 ml-1" />
          </span>
          <span className="bg-yellow-100 text-orange-400 px-2 py-1 rounded flex items-center">
            Firebase <IoLogoFirebase className="text-orange-500 ml-1" />
          </span>
        </div>
      </div>
    ),
  },
  {
    category: "Yamada Holdings",
    title: "Software Developer",
    src: "/images/pet-image.jpg",
    soundBite: "optimized sales for a B2B Pet supplies distributor",
    content: (
      <div>
        <p className="text-sm text-gray-500">
          Jan 2021 - April 2021 | Malaysia
        </p>

        <ul className="list-disc pl-5 space-y-2 mt-3">
          <li>
            Authored <strong className="text-blue-500">Python</strong> scripts
            and a graphical user interface using{" "}
            <strong className="text-purple-500">Tkinter</strong> for
            non-technical employees to transform WhatsApp order messages into
            formatted CSV files for seamless integration into Microsoft Excel
          </li>
          <li>
            Reduced time spent on manual data-entry by{" "}
            <strong className="text-green-600">50%</strong>, saving
            approximately <strong className="text-green-600">25 hours</strong>{" "}
            of employee time across{" "}
            <strong className="text-green-600">300 orders</strong> per month by
            automatically flagging potential order errors using a{" "}
            <strong className="text-yellow-500">
              Fuzzy matching algorithm
            </strong>
          </li>
        </ul>

        {/* Skills Row */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="bg-yellow-200 text-blue-800 px-2 py-1 rounded flex items-center">
            Python <FaPython className="text-blue-500 ml-1" />
          </span>
          <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
            Tkinter
          </span>
        </div>
      </div>
    ),
  },
]
