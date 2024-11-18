import { motion } from "framer-motion";


export function ServiceCard({ title, description, icon } : { title: string, description: string, icon: React.ReactNode }) {
    return (
      <motion.div 
        className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </motion.div>
    )
  }