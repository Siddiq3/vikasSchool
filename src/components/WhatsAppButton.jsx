import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919441629842"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-secondary text-white p-4 rounded-full shadow-2xl hover:bg-secondary-light transition-colors"
    >
      <div className="absolute inset-0 rounded-full bg-secondary/70 animate-pulse-ring" />
      <FaWhatsapp className="text-3xl relative z-10" />
    </motion.a>
  )
}

export default WhatsAppButton
