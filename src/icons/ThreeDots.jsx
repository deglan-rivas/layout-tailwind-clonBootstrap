import { cn } from "@/lib/utils"

const ThreeDots = ({className, ...props}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={cn("bi bi-three-dots w-4 h-4", className)} fill="currentColor" viewBox="0 0 16 16">
      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
    </svg>
  )
}

export default ThreeDots