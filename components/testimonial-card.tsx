import { Star } from "lucide-react"

interface TestimonialCardProps {
  name: string
  location: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, location, quote, rating }: TestimonialCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-900 transition-all duration-300 hover:shadow-lg hover:border-blue-700">
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className={`h-5 w-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-700"}`} />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic">&quot;{quote}&quot;</p>
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-gray-400 text-sm">{location}</p>
      </div>
    </div>
  )
}
