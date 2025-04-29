import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import TestimonialCard from "@/components/testimonial-card"
import ServiceCard from "@/components/service-card"
import HeroAnimation from "@/components/hero-animation"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-black">
      {/* Hero Section with Three.js Animation */}
      <section className="relative w-full h-screen bg-black text-white overflow-hidden">
        <HeroAnimation />
        <div className="container relative mx-auto px-4 h-full flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="text-blue-400">Reliable</span> Electrical Services
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mb-10 text-gray-300 animate-fade-in-delay">
            Professional electrical solutions for your home and business. Licensed, insured, and trusted throughout
            Metro City.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/contact">
                Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-blue-500 text-blue-400 hover:bg-blue-950">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
          <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-300">
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-blue-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-5 w-5 text-blue-400" />
              <span>24/7 Emergency Service</span>
            </div>
            <div className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-blue-400" />
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Electrical Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From simple repairs to complete electrical installations, we provide a wide range of services to meet all
              your electrical needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Zap className="h-10 w-10 text-blue-500" />}
              title="Residential Electrical"
              description="Complete home electrical services including wiring, panel upgrades, lighting installation, and troubleshooting."
              link="/services#residential"
            />
            <ServiceCard
              icon={<Shield className="h-10 w-10 text-blue-500" />}
              title="Commercial Services"
              description="Comprehensive electrical solutions for offices, retail spaces, and industrial facilities."
              link="/services#commercial"
            />
            <ServiceCard
              icon={<Clock className="h-10 w-10 text-blue-500" />}
              title="Emergency Repairs"
              description="24/7 emergency electrical repair services to quickly resolve urgent electrical issues."
              link="/services#emergency"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-950">
              <Link href="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <Image
                src="/elec.png"
                alt="Professional electrician services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Volt Masters Electric?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Experienced Professionals</h3>
                    <p className="text-gray-300">
                      Our team consists of licensed electricians with over 15 years of experience in the industry.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Quality Workmanship</h3>
                    <p className="text-gray-300">
                      We take pride in our work and ensure that every job is completed to the highest standards.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Transparent Pricing</h3>
                    <p className="text-gray-300">
                      No hidden fees or surprises. We provide detailed quotes before starting any work.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    <CheckCircle className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Customer Satisfaction</h3>
                    <p className="text-gray-300">
                      Our 5-star reviews speak for themselves. We&apos;re not happy until you&apos;re happy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Rajesh Sharma"
              location="Gurgaon, Haryana"
              quote="Volt Masters Electric did an amazing job installing new lighting in our kitchen and fixing the voltage fluctuation issues. They were professional, on time, and left the area spotless. Highly recommend!"
              rating={5}
            />
            <TestimonialCard
              name="Priya Malhotra"
              location="South Delhi"
              quote="I had an electrical emergency during the monsoon season and they responded within 30 minutes despite the heavy rain. Fixed the short circuit quickly and the price was fair. These guys are my go-to electricians now."
              rating={5}
            />
            <TestimonialCard
              name="Vikram Patel"
              location="Noida"
              quote="We hired Volt Masters for our office rewiring project after facing frequent power trips. They worked efficiently with minimal disruption to our business and even suggested energy-saving solutions. The quality of work was excellent."
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today for a free consultation and estimate on your electrical project.
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-900">
            <Link href="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
