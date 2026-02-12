import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaPaperPlane, FaUser, FaChild } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    grade: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const locationLink = 'https://www.google.com/maps/search/?api=1&query=Sri+Vikash+High+School,+Gunjalapadu+Rd,+Koilkuntla,+Andhra+Pradesh+518134'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="hero-badge mb-4">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">Contact Us</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">We'd love to hear from you. Reach out to learn more about admissions, campus tours, or any questions.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 -mt-20 relative z-10 mb-16">
            {[
              { icon: FaPhoneAlt, title: 'Call Us', info: '+91 94416 29842', link: 'tel:+919441629842', color: 'from-primary to-primary-light' },
              { icon: FaWhatsapp, title: 'WhatsApp', info: '+91 94416 29842', link: 'https://wa.me/919441629842', color: 'from-secondary to-secondary-light' },
              { icon: FaEnvelope, title: 'Email Us', info: 'info@srivikashighschool.com', link: 'mailto:info@srivikashighschool.com', color: 'from-warm to-warm-light' },
              { icon: FaClock, title: 'Working Hours', info: 'Mon-Sat: 8AM - 5PM', link: null, color: 'from-primary-dark to-primary' },
            ].map((card, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }}>
                  {card.link ? (
                    <a href={card.link} target={card.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">
                      <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white text-center shadow-xl`}>
                        <card.icon className="text-3xl mx-auto mb-3" />
                        <h4 className="font-bold text-lg mb-1">{card.title}</h4>
                        <p className="text-white/80 text-sm">{card.info}</p>
                      </div>
                    </a>
                  ) : (
                    <div className={`bg-gradient-to-br ${card.color} rounded-2xl p-6 text-white text-center shadow-xl`}>
                      <card.icon className="text-3xl mx-auto mb-3" />
                      <h4 className="font-bold text-lg mb-1">{card.title}</h4>
                      <p className="text-white/80 text-sm">{card.info}</p>
                    </div>
                  )}
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          {/* Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection>
              <div className="bg-cream rounded-3xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">
                  Enquiry Form
                </h2>
                <p className="text-gray-500 mb-8">Fill in the details and we'll get back to you shortly.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaPaperPlane className="text-secondary text-3xl" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
                    <p className="text-gray-600">We've received your enquiry. Our team will contact you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Parent/Guardian Name</label>
                        <div className="relative">
                          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                            placeholder="Enter your name"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                        <div className="relative">
                          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                            placeholder="Enter email"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                        <div className="relative">
                          <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                            placeholder="+91"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">Student Name</label>
                        <div className="relative">
                          <FaChild className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="studentName"
                            value={formData.studentName}
                            onChange={handleChange}
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                            placeholder="Student's name"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Grade Applying For</label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white"
                      >
                        <option value="">Select Grade</option>
                        <option value="nursery">Nursery</option>
                        <option value="lkg">LKG</option>
                        <option value="ukg">UKG</option>
                        <option value="1">Grade 1</option>
                        <option value="2">Grade 2</option>
                        <option value="3">Grade 3</option>
                        <option value="4">Grade 4</option>
                        <option value="5">Grade 5</option>
                        <option value="6">Grade 6</option>
                        <option value="7">Grade 7</option>
                        <option value="8">Grade 8</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message (Optional)</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white resize-none"
                        placeholder="Any specific queries..."
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <FaPaperPlane /> Submit Enquiry
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Map & Address */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <div className="bg-gray-200 rounded-3xl h-80 overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps?q=Sri+Vikash+High+School,+Gunjalapadu+Rd,+Koilkuntla,+Andhra+Pradesh+518134&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sri Vikas High School Location"
                  />
                </div>
                <a
                  href={locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !bg-white !text-primary !border-primary w-full text-center"
                >
                  Open Exact Location in Google Maps
                </a>
                <div className="bg-primary-dark rounded-3xl p-8 text-white">
                  <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-heading)]">Visit Our Campus</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <FaMapMarkerAlt className="text-accent text-xl mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-white/80 text-sm">Sri Vikash High School, Gunjalapadu Rd, Koilkuntla, Andhra Pradesh 518134</p>
                        <a
                          href={locationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent text-sm hover:text-accent-light transition-colors"
                        >
                          View on Google Maps
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaPhoneAlt className="text-accent text-xl mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <a href="tel:+919441629842" className="text-white/70 text-sm hover:text-accent transition-colors">+91 94416 29842</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaEnvelope className="text-accent text-xl mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <a href="mailto:info@srivikashighschool.com" className="text-white/70 text-sm hover:text-accent transition-colors">info@srivikashighschool.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <FaClock className="text-accent text-xl mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Office Hours</p>
                        <p className="text-white/70 text-sm">Monday-Saturday: 8:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
