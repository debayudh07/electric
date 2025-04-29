import type React from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

export default function ServiceCard({ icon, title, description, link }: ServiceCardProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md border border-blue-900 transition-all duration-300 hover:shadow-lg hover:border-blue-700 group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link href={link} className="inline-flex items-center text-blue-400 font-medium group-hover:text-blue-300">
        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  )
}
