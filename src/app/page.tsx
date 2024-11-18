"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Cpu,
  Cloud,
  Coins,
  BotIcon as Robot,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Smartphone,
  Database,
  Code,
} from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { SocialIcon } from "@/components/social-icon";
import { ServiceCard } from "@/components/service-card";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [text] = useTypewriter({
    words: [
      "Experience our integrated ecosystem",
      "Revolutionize your financial future",
      "Embrace cutting-edge technology",
    ],
    loop: 0,
  });

  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-b from-black via-gray-900 to-black z-10">
      <Header  toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-gray-900 bg-opacity-95 md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full">
              <nav className="text-center">
                <ul className="space-y-6">
                  <li><a href="#products" className="text-2xl hover:text-blue-400 transition" onClick={toggleMenu}>Products</a></li>
                  <li><a href="#services" className="text-2xl hover:text-blue-400 transition" onClick={toggleMenu}>Services</a></li>
                  <li><a href="#ecosystem" className="text-2xl hover:text-blue-400 transition" onClick={toggleMenu}>Ecosystem</a></li>
                  <li><a href="#contact" className="text-2xl hover:text-blue-400 transition" onClick={toggleMenu}>Contact</a></li>
                </ul>
                <div className="flex justify-center space-x-6 mt-8">
                  <SocialIcon Icon={Facebook} link="https://facebook.com" />
                  <SocialIcon Icon={Twitter} link="https://twitter.com" />
                  <SocialIcon Icon={Linkedin} link="https://linkedin.com" />
                  <SocialIcon Icon={Instagram} link="https://instagram.com" />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="z-10 pt-16">
        <section className="container mx-auto px-4 py-20 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Future of <span className="text-blue-500">Finance</span> and{" "}
            <span className="text-blue-500">Technology</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-10 text-blue-300 h-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {text}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 relative overflow-hidden group"
            >
              <span className="relative z-10">Explore Our Products</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <ChevronDown className="ml-2 h-4 w-4 relative z-10" />
            </Button>
          </motion.div>
        </section>

        <section id="products" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Our Revolutionary Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ProductCard
                title="CoDiPay"
                description="A fintech platform combining traditional banking, crypto exchange, and token mining."
                icon={<Coins className="h-12 w-12 text-blue-500" />}
              />
              <ProductCard
                title="CodiAI"
                description="An all-in-one AI copilot assistant that can handle any task."
                icon={<Robot className="h-12 w-12 text-green-500" />}
              />
              <ProductCard
                title="CodiHub"
                description="A comprehensive cloud platform offering hosting, VMs, and more."
                icon={<Cloud className="h-12 w-12 text-purple-500" />}
              />
            </div>
          </div>
        </section>


        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Integrations"
                description="Seamlessly connect your existing systems with our cutting-edge solutions."
                icon={<Code className="h-12 w-12 text-yellow-500" />}
              />
              <ServiceCard 
                title="App Development"
                description="Custom mobile and web applications tailored to your specific needs."
                icon={<Smartphone className="h-12 w-12 text-red-500" />}
              />
              <ServiceCard 
                title="Data Management"
                description="Efficient and secure handling of your valuable data assets."
                icon={<Database className="h-12 w-12 text-green-500" />}
              />
            </div>
          </div>
        </section>

        <section id="ecosystem" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Our Complete Ecosystem</h2>
            <p className="text-xl mb-12 text-gray-300">
              Everything in our platform can be purchased with credits using our
              own coin
            </p>
            <div className="flex justify-center">
              <motion.div
                className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Cpu className="h-16 w-16 text-blue-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Integrated Technology Stack
                </h3>
                <p className="text-gray-300 mb-6">
                  Our ecosystem seamlessly integrates finance, AI, and cloud
                  services, providing a unified experience for all your
                  technological needs.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 text-gray-300">
              Be the first to know about our latest innovations
            </p>
            <form
              className="max-w-md mx-auto flex gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-blue-500"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

    <Footer/>
    </div>
  );
}


