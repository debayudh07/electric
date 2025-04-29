import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-blue-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Volt Masters</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional electrical services for residential and commercial properties. Licensed, insured, and trusted
              throughout Metro City.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/services#emergency" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services#residential" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Residential Electrical
                </Link>
              </li>
              <li>
                <Link href="/services#commercial" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Commercial Electrical
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Lighting Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Panel Upgrades
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Safety Inspections
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a href="tel:+919812345678" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +91 98123 45678
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:info@voltmasterselectric.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  info@voltmasterselectric.com
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  C-45, Sector 62
                  <br />
                  Noida, Uttar Pradesh 201301
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Volt Masters Electric. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">
              License Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
