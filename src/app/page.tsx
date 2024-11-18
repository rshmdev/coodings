"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronDown,
  Cloud,
  Coins,
  BotIcon as Robot,
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  Zap,
  Layers,
  Box,
  Code,
  Database,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SocialIcon } from "@/components/social-icon";

const services = [
  {
    title: "Desenvolvimento de Software",
    icon: <Code className="h-8 w-8" />,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Consultoria em TI",
    icon: <Layers className="h-8 w-8" />,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Soluções SaaS",
    icon: <Cloud className="h-8 w-8" />,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Tecnologia Bancária",
    icon: <Coins className="h-8 w-8" />,
    color: "from-yellow-400 to-yellow-600",
  },
  {
    title: "Integrações de Sistemas",
    icon: <Zap className="h-8 w-8" />,
    color: "from-red-400 to-red-600",
  },
  {
    title: "IA e Machine Learning",
    icon: <Robot className="h-8 w-8" />,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    title: "Computação em Nuvem",
    icon: <Database className="h-8 w-8" />,
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "Blockchain e Criptomoedas",
    icon: <Shield className="h-8 w-8" />,
    color: "from-teal-400 to-teal-600",
  },
];

const projects = [
  {
    name: "CodiCloud",
    description:
      "Serviço de hospedagem em nuvem utilizando tecnologia de containerização",
    icon: <Cloud className="h-12 w-12 text-blue-500" />,
  },
  {
    name: "CodiCoin",
    description: "Token de criptomoeda que impulsiona nossa economia digital",
    icon: <Coins className="h-12 w-12 text-yellow-500" />,
  },
  {
    name: "CodiHub",
    description:
      "Plataforma integrada de desenvolvimento e gerenciamento de projetos",
    icon: <Box className="h-12 w-12 text-green-500" />,
  },
  {
    name: "CodiIa",
    description: "Assistente alimentado por IA para desenvolvedores",
    icon: <Robot className="h-12 w-12 text-purple-500" />,
  },
  {
    name: "Codilivery",
    description: "Solução SaaS para gerenciamento de entregas",
    icon: <Zap className="h-12 w-12 text-red-500" />,
  },
  {
    name: "Codipay",
    description:
      "Solução fintech abrangente, incluindo gateway de pagamento e exchange de criptomoedas",
    icon: <Coins className="h-12 w-12 text-indigo-500" />,
  },
];

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [activeService, setActiveService] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 3000);

    const projectInterval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => {
      clearInterval(serviceInterval);
      clearInterval(projectInterval);
    };
  }, []);



  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-b from-black via-gray-900 to-black z-10">
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

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
                  <li>
                    <a
                      href="#about"
                      className="text-2xl hover:text-blue-400 transition"
                      onClick={toggleMenu}
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="text-2xl hover:text-blue-400 transition"
                      onClick={toggleMenu}
                    >
                      Serviços
                    </a>
                  </li>
                  <li>
                    <a
                      href="#ecosystem"
                      className="text-2xl hover:text-blue-400 transition"
                      onClick={toggleMenu}
                    >
                      Ecossistema
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="text-2xl hover:text-blue-400 transition"
                      onClick={toggleMenu}
                    >
                      Contato
                    </a>
                  </li>
                </ul>
                <div className="flex justify-center space-x-6 mt-8">
                  <SocialIcon Icon={Facebook} link="https://facebook.com" />
                  <SocialIcon Icon={Twitter} link="https://twitter.com" />
                  <SocialIcon Icon={LinkedIn} link="https://linkedin.com" />
                  <SocialIcon Icon={Instagram} link="https://instagram.com" />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="z-10 pt-16">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 "></div>
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src="/placeholder.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Soluções Inovadoras em Tecnologia
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-10 text-blue-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Revolucionando a indústria de TI com um ecossistema interconectado
              de serviços
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
                <span className="relative z-10">Explore Nossos Serviços</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <ChevronDown className="ml-2 h-4 w-4 relative z-10" />
              </Button>
            </motion.div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="h-12 w-12 text-white animate-bounce" />
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Sobre a Coddings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6 text-gray-300">
                  A Coddings é uma empresa de Tecnologia da Informação de ponta,
                  especializada em fornecer soluções abrangentes em diversos
                  setores da indústria de tecnologia. Nossa expertise abrange
                  desenvolvimento de software, consultoria, Software como
                  Serviço (SaaS), soluções bancárias, integrações de sistemas e
                  implementações de inteligência artificial.
                </p>
                <p className="text-lg text-gray-300">
                  No centro de nossas operações está o compromisso de entregar
                  agilidade, praticidade e custo-benefício aos nossos clientes.
                  Utilizamos tecnologias avançadas de IA para otimizar nossos
                  processos de desenvolvimento, garantindo soluções eficientes e
                  inovadoras.
                </p>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg transform rotate-3"></div>
                <img
                  src="/logo.png"
                  alt="Coddings Team"
                  className="relative z-10 rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 " ref={servicesRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Nossos Serviços
            </h2>
            <div className="relative h-[36rem]">
              <div className="absolute inset-0 flex items-center justify-center">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-48 h-48 rounded-full flex items-center justify-center ${
                      index === activeService ? "z-20" : "z-10"
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: index === activeService ? 1 : 0.7,
                      scale: index === activeService ? 1 : 0.8,
                      x: `${
                        Math.cos((2 * Math.PI * index) / services.length) * 180
                      }px`,
                      y: `${
                        Math.sin((2 * Math.PI * index) / services.length) * 180
                      }px`,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className={`w-full h-full rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                    >
                      {service.icon}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center bg-gray-900 bg-opacity-95 p-8 rounded-lg shadow-xl max-w-md z-30"
                >
                  <div className="mb-4">{services[activeService].icon}</div>
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    {services[activeService].title}
                  </h3>
                  <p className="text-lg text-gray-300">
                    Soluções personalizadas para impulsionar seu negócio com
                    tecnologia de ponta.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="py-20" ref={projectsRef}>
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Nosso Ecossistema
            </h2>
            <div className="hidden md:block relative h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`absolute w-80 h-80 rounded-lg flex items-center justify-center ${
                      index === activeProject ? "z-10" : "z-0"
                    }`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: index === activeProject ? 1 : 0.3,
                      scale: index === activeProject ? 1 : 0.5,
                      x: `${
                        Math.cos((2 * Math.PI * index) / projects.length) * 250
                      }px`,
                      y: `${
                        Math.sin((2 * Math.PI * index) / projects.length) * 250
                      }px`,
                      rotateY: index === activeProject ? 0 : 180,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full h-full rounded-lg bg-gray-800 p-6 flex flex-col items-center justify-center transform transition-transform duration-500 hover:scale-105">
                      {project.icon}
                      <h3 className="text-2xl font-bold mt-4 mb-2">
                        {project.name}
                      </h3>
                      <p className="text-sm text-center text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="md:hidden">
            <div className="flex flex-col items-center">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="w-full max-w-sm mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
                    {project.icon}
                    <h3 className="text-2xl font-bold mt-4 mb-2">{project.name}</h3>
                    <p className="text-sm text-center text-gray-400">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Entre em Contato
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Fique por dentro das nossas últimas inovações
            </p>
            <form
              className="max-w-md mx-auto flex gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow bg-gray-700 text-white border-gray-600 focus:border-blue-500"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Inscrever-se
              </Button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
