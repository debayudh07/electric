"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { CheckCircle, Mail, MapPin, Phone } from "lucide-react"
import ContactAnimation from "@/components/contact-animation"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  service: z.string({
    required_error: "Please select a service.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real application, you would send this data to your server
    console.log(values)
    setIsSubmitted(true)
  }

  return (
    <main className="flex flex-col min-h-screen bg-black">
      {/* Hero Section with Three.js Animation */}
      <section className="relative w-full h-[50vh] bg-black text-white overflow-hidden">
        <ContactAnimation />
        <div className="container relative mx-auto px-4 h-full flex flex-col items-center justify-center text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Contact <span className="text-blue-400">Volt Masters</span> Electric
          </h1>
          <p className="text-xl max-w-2xl mb-10 text-gray-300 animate-fade-in-delay">
            Get in touch with our team for all your electrical needs. We&apos;re here to help!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-950 p-8 rounded-lg text-center hover:shadow-md transition-shadow border border-blue-900">
              <div className="mx-auto bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Call Us</h3>
              <p className="text-gray-300 mb-2">Mon-Sat: 9am-8pm</p>
              <p className="text-gray-300 mb-2">Sun: 10am-4pm</p>
              <a href="tel:+919812345678" className="text-blue-400 font-semibold hover:underline">
                +91 98123 45678
              </a>
            </div>

            <div className="bg-blue-950 p-8 rounded-lg text-center hover:shadow-md transition-shadow border border-blue-900">
              <div className="mx-auto bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Email Us</h3>
              <p className="text-gray-300 mb-2">24/7 Email Support</p>
              <p className="text-gray-300 mb-2">Response within 6hrs</p>
              <a href="mailto:info@voltmasterselectric.com" className="text-blue-400 font-semibold hover:underline">
                info@voltmasterselectric.com
              </a>
            </div>

            <div className="bg-blue-950 p-8 rounded-lg text-center hover:shadow-md transition-shadow border border-blue-900">
              <div className="mx-auto bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Visit Us</h3>
              <p className="text-gray-300 mb-2">Mon-Sat: 9am-6pm</p>
              <p className="text-gray-300 mb-2">C-45, Sector 62</p>
              <p className="text-blue-400 font-semibold">Noida, UP 201301</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-10 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-blue-900 border border-blue-700 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                  <p className="text-gray-300 mb-4">
                    Your message has been sent successfully. One of our representatives will contact you shortly.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-blue-500 text-blue-400 hover:bg-blue-900"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                className="bg-gray-900 border-blue-900 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                {...field}
                                className="bg-gray-900 border-blue-900 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="(555) 123-4567"
                                {...field}
                                className="bg-gray-900 border-blue-900 text-white"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Service Needed</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-gray-900 border-blue-900 text-white">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-gray-900 border-blue-900 text-white">
                                <SelectItem value="residential">Residential Electrical</SelectItem>
                                <SelectItem value="commercial">Commercial Electrical</SelectItem>
                                <SelectItem value="emergency">Emergency Repairs</SelectItem>
                                <SelectItem value="lighting">Lighting Installation</SelectItem>
                                <SelectItem value="panel">Panel Upgrades</SelectItem>
                                <SelectItem value="inspection">Electrical Inspection</SelectItem>
                                <SelectItem value="other">Other Services</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your electrical needs in detail..."
                              className="min-h-[120px] bg-gray-900 border-blue-900 text-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Send Message
                    </Button>
                  </form>
                </Form>
              )}
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">Our Location</h2>
              <div className="rounded-lg overflow-hidden shadow-md h-[400px] relative">
                <Image
                  src="/images/map.png"
                  alt="Map location of Volt Masters Electric"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-xs w-full border border-blue-900">
                    <h3 className="font-bold text-lg mb-1 text-white">Volt Masters Electric</h3>
                    <p className="text-gray-300 text-sm mb-2">123 Electric Ave, Metro City, MC 12345</p>
                    <Button asChild size="sm" className="w-full bg-blue-600 hover:bg-blue-700">
                      <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-blue-900 p-6 rounded-lg border border-blue-800">
                <h3 className="text-xl font-bold mb-4 text-white">Service Area</h3>
                <p className="text-gray-300 mb-4">
                  We proudly serve Delhi NCR and surrounding areas within a 50-km radius, including:
                </p>
                <div className="grid grid-cols-2 gap-2 text-gray-300">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Noida</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Gurgaon</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">South Delhi</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Faridabad</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Ghaziabad</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">Greater Noida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">24/7 Emergency Electrical Service</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Experiencing an electrical emergency? Don&apos;t wait! Our team is available 24/7 for urgent electrical issues.
          </p>
          <Button asChild size="lg" className="bg-black text-white hover:bg-gray-900">
            <a href="tel:+919812345678">Call Our Emergency Line: +91 98123 45678</a>
          </Button>
        </div>
      </section>
    </main>
  )
}
