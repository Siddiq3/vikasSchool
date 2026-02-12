import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary-dark text-white relative">
      {/* Wave SVG */}
      <div className="absolute top-0 left-0 right-0 -translate-y-[99%]">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--color-ink)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-white p-1 overflow-hidden">
                <img
                  src="/images/school/logo-square.jpg"
                  alt="Sri Vikas High School logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)]">Sri Vikas</h3>
                <p className="text-xs text-accent font-semibold tracking-wider uppercase">High School</p>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Sri Vikas High School is dedicated to providing quality education that nurtures every child's potential. We believe in holistic development through academics, sports, and values.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, href: '#' },
                { icon: FaInstagram, href: '#' },
                { icon: FaYoutube, href: '#' },
                { icon: FaTwitter, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Our Programmes', path: '/programmes' },
                { name: 'Admissions', path: '/admissions' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'About Us', path: '/about' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-accent">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Important Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)]">Important Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Achievements', path: '/about' },
                { name: 'Our Team', path: '/about' },
                { name: 'Infrastructure', path: '/gallery' },
                { name: 'Careers', path: '/contact' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="text-accent">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4 font-[family-name:var(--font-heading)]">Get In Touch!</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919441629842" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors text-sm">
                  <FaPhoneAlt className="text-accent flex-shrink-0" />
                  +91 94416 29842
                </a>
              </li>
              <li>
                <a href="tel:+919441629842" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors text-sm">
                  <FaPhoneAlt className="text-accent flex-shrink-0" />
                  +91 94416 29842
                </a>
              </li>
              <li>
                <a href="mailto:info@srivikashighschool.com" className="flex items-center gap-3 text-gray-300 hover:text-accent transition-colors text-sm">
                  <FaEnvelope className="text-accent flex-shrink-0" />
                  info@srivikashighschool.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-accent flex-shrink-0 mt-1" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Sri+Vikash+High+School,+Gunjalapadu+Rd,+Koilkuntla,+Andhra+Pradesh+518134"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Sri Vikash High School, Gunjalapadu Rd, Koilkuntla, Andhra Pradesh 518134
                </a>
              </li>
            </ul>
            <Link to="/admissions" className="btn-primary mt-6 text-sm !px-6 !py-2">
              Enroll Now
            </Link>
          </motion.div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Sri Vikas High School. All Rights Reserved.
            </p>
            <p className="text-gray-300 text-xs mt-1">
              Developed by{' '}
              <a
                href="https://www.instagram.com/siddiqkolimi/"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-light transition-colors"
              >
                Siddiq Kolimi
              </a>
              {' '}| For website creating contact me{' '}
              <a href="tel:+919441629842" className="text-accent hover:text-accent-light transition-colors">
                9441629842
              </a>
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-accent text-primary-dark flex items-center justify-center hover:bg-accent-light transition-all cursor-pointer"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
