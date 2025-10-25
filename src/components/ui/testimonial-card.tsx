import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialAuthor {
  name: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  className
}: TestimonialCardProps) {

  
  return (
   <div
  className={cn(
    "flex flex-col rounded-lg border-t",
    "bg-gradient-to-b from-black to-red-900 text-white",
    "p-4 text-start sm:p-6",
    "max-w-[320px] sm:max-w-[320px]",
    "cursor-pointer",
    "transition-all duration-300 ease-out transform  hover:scale-105 hover:z-10",
    "hover:from-red-900 hover:to-black",
    className
  )}
>

      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage  src={author.avatar} alt={author.name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none">
            {author.name}
          </h3>
        </div>
      </div>
      <p className="sm:text-md mt-4 text-sm text-white">
        {text}
      </p>
    </div>
  )
}