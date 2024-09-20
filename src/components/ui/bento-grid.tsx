import { cn } from "@/lib/utils"
import React from "react"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  link: string
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-6 pb-3 bg-black border-white/[0.2]  border justify-between flex flex-col space-y-4",
        className
      )}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="group-hover/bento:translate-y-1 transition duration-200">
          {header}
          {icon}
          <div className="font-sans font-bold text-neutral-200 mb-1 mt-3">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-300">
            {description}
          </div>
        </div>
      </a>
    </div>
  )
}
