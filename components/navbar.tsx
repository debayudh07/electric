"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Zap } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-black shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Zap className="h-8 w-8 text-blue-400" />
            <span className="ml-2 text-xl font-bold text-white">Volt Masters</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/" ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/services" ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/contact" ? "text-blue-400" : "text-white hover:text-blue-400"
              }`}
            >
              Contact
            </Link>
            <div className="ml-4">
              <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
                <a href="tel:+919812345678" className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <span>+91 98123 45678</span>
                </a>
              </Button>
            </div>
          </nav>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6 text-white" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 text-white border-blue-900">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  href="/"
                  className={`px-4 py-2 rounded-md text-lg font-medium ${
                    pathname === "/" ? "text-blue-400" : "text-white hover:text-blue-400"
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  className={`px-4 py-2 rounded-md text-lg font-medium ${
                    pathname === "/services" ? "text-blue-400" : "text-white hover:text-blue-400"
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className={`px-4 py-2 rounded-md text-lg font-medium ${
                    pathname === "/contact" ? "text-blue-400" : "text-white hover:text-blue-400"
                  }`}
                >
                  Contact
                </Link>
                <div className="pt-4">
                  <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                    <a href="tel:+919812345678" className="flex items-center justify-center">
                      <Phone className="mr-2 h-4 w-4" />
                      <span>+91 98123 45678</span>
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
