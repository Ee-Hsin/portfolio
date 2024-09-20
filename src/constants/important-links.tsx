import { FaGithub, FaLinkedin } from "react-icons/fa"

export const ImportantLinks = () => {
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
        href="/files/Jordan-Ext-Resume.pdf" // Link to your resume file in the public folder
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