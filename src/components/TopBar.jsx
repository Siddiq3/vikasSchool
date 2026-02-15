import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const TopBar = () => {
  return (
    <>
      {/* Admission Banner */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-secondary text-white py-2 text-center relative overflow-hidden"
      >
        <div className="animate-marquee whitespace-nowrap inline-flex gap-16">
          <span className="text-sm md:text-base font-semibold">
            🎓 Admissions Open For 2026-2027 &nbsp;|&nbsp;
            <Link to="/admissions" className="underline hover:text-accent ml-2 transition-colors">
              Click Here to Enroll
            </Link>
          </span>
          <span className="text-sm md:text-base font-semibold">
            🎓 Admissions Open For 2026-2027 &nbsp;|&nbsp;
            <Link to="/admissions" className="underline hover:text-accent ml-2 transition-colors">
              Click Here to Enroll
            </Link>
          </span>
          <span className="text-sm md:text-base font-semibold">
            🎓 Admissions Open For 2026-2027 &nbsp;|&nbsp;
            <Link to="/admissions" className="underline hover:text-accent ml-2 transition-colors">
              Click Here to Enroll
            </Link>
          </span>
        </div>
      </motion.div>

      {/* Info Bar */}
      <div className="bg-primary-dark text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4 lg:gap-6 flex-wrap">
            <a href="tel:+919490103033" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FaPhoneAlt className="text-accent" /> +91 94901 03033
            </a>
            <a href="tel:+919441629842" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FaPhoneAlt className="text-accent" /> +91 94416 29842
            </a>
            <a href="mailto:srivikashighschoolem@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FaEnvelope className="text-accent" /> srivikashighschoolem@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-accent" />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sri+Vikash+High+School,+Gunjalapadu+Rd,+Koilkuntla,+Andhra+Pradesh+518134"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Sri Vikash High School, Gunjalapadu Rd, Koilkuntla
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBar
