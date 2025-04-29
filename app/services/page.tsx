import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Lightbulb, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import ElectricalAnimation from "@/components/electrical-animation"

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      {/* Hero Section with Three.js Animation */}
      <section className="relative w-full h-[60vh] bg-black text-white overflow-hidden">
        <ElectricalAnimation />
        <div className="container relative mx-auto px-4 h-full flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Our <span className="text-blue-400">Electrical</span> Services
          </h1>
          <p className="text-xl max-w-2xl mb-10 text-gray-300 animate-fade-in-delay">
            Comprehensive electrical solutions for residential and commercial properties. Quality workmanship
            guaranteed.
          </p>
        </div>
      </section>

      {/* Residential Services */}
      <section id="residential" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Residential Electrical Services</h2>
              <p className="text-gray-400 mb-8">
                Our residential electrical services are designed to keep your home safe, efficient, and up to code. From
                simple repairs to complete home rewiring, our licensed electricians have the expertise to handle any
                electrical project, including voltage stabilization solutions for Indian power conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Electrical Repairs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Panel Upgrades</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Lighting Installation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Ceiling Fan Installation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Outlet Installation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Home Rewiring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Surge Protection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Smart Home Wiring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Voltage Stabilizers</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Inverter Installation</span>
                </div>
              </div>

              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">
                  Request Residential Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/elec2.png"
                alt="Residential electrical services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section id="commercial" className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Commercial Electrical Services</h2>
              <p className="text-gray-300 mb-8">
                Our commercial electrical services are tailored to meet the unique needs of businesses in India. We
                understand that electrical issues and power fluctuations can disrupt your operations, which is why we
                provide efficient and reliable solutions with backup power options.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Commercial Wiring</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Lighting Systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Power Distribution</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Equipment Installation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Code Compliance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Energy Efficiency</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Maintenance Plans</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Safety Inspections</span>
                </div>
              </div>

              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/contact">
                  Request Commercial Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="lg:w-1/2">
              <Image
                src="/elec3.png"
                alt="Commercial electrical services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Specialized Electrical Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Beyond our standard offerings, we provide specialized electrical services to address specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg shadow-md transition-transform hover:scale-105 border border-blue-900">
              <div className="mb-4">
                <Lightbulb className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Energy-Efficient Lighting</h3>
              <p className="text-gray-400 mb-4">
                Upgrade to energy-efficient lighting solutions that reduce your electricity bills and environmental
                footprint.
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">LED lighting installation</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">Motion sensor lighting</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">Smart lighting systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-md transition-transform hover:scale-105 border border-blue-900">
              <div className="mb-4">
                <Shield className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Safety Inspections</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive electrical safety inspections to identify potential hazards before they become dangerous.
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">Home safety inspections</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">Commercial property audits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">Insurance compliance checks</span>
                </li>
              </ul>
            </div>

            <div
              id="emergency"
              className="bg-gray-900 p-6 rounded-lg shadow-md transition-transform hover:scale-105 border border-blue-900"
            >
              <div className="mb-4">
                <Clock className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Emergency Services</h3>
              <p className="text-gray-400 mb-4">
                24/7 emergency electrical services to address urgent issues and restore power quickly.
              </p>
              <ul className="space-y-2 mb-4 text-gray-300">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">Power outage resolution</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">Electrical fire prevention</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-sm">Immediate hazard mitigation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Service Process</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We follow a streamlined process to ensure efficient and high-quality service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                1
              </div>
              <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-blue-700"></div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Consultation</h3>
              <p className="text-gray-300 text-center">
                We discuss your electrical needs and provide expert advice on the best solutions.
              </p>
            </div>

            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                2
              </div>
              <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-blue-700"></div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Detailed Quote</h3>
              <p className="text-gray-300 text-center">
                We provide a transparent, detailed quote with no hidden fees or surprises.
              </p>
            </div>

            <div className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                3
              </div>
              <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-blue-700"></div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Professional Service</h3>
              <p className="text-gray-300 text-center">
                Our licensed electricians complete the work efficiently and to the highest standards.
              </p>
            </div>

            <div>
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">
                4
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-white">Follow-up</h3>
              <p className="text-gray-300 text-center">
                We ensure your complete satisfaction and provide ongoing support as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Electrical Services?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and estimate on your electrical project.
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-900">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
