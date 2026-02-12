import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCalendarAlt, FaClipboardList, FaFileAlt, FaUserCheck, FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const Admissions = () => {
  const steps = [
    { icon: FaClipboardList, title: 'Submit Application', desc: 'Fill out the online application form with student and parent details.' },
    { icon: FaFileAlt, title: 'Document Submission', desc: 'Submit required documents including birth certificate, previous report cards, and photos.' },
    { icon: FaUserCheck, title: 'Interaction Round', desc: 'A friendly interaction session with the student and parents to understand learning needs.' },
    { icon: FaCheckCircle, title: 'Admission Confirmed', desc: 'Upon successful evaluation, complete the fee payment and secure your child\'s admission.' },
  ]

  const documents = [
    'Birth Certificate (original & photocopy)',
    'Previous School Report Card / Transfer Certificate',
    'Passport-size photographs (4 copies)',
    'Aadhaar Card of the student',
    'Address Proof (electricity bill, etc.)',
    'Parent/Guardian Aadhaar Card',
    'Caste Certificate (if applicable)',
    'Medical fitness certificate',
  ]

  const grades = [
    { grade: 'Pre-Primary (Nursery - UKG)', age: '3-5 years', seats: 'Limited' },
    { grade: 'Primary (Grades 1-5)', age: '6-10 years', seats: 'Available' },
    { grade: 'Middle School (Grades 6-8)', age: '11-13 years', seats: 'Available' },
    { grade: 'High School (Grades 9-10)', age: '14-16 years', seats: 'Limited' },
  ]

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
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-80 h-80 bg-white/5 rounded-full"
        />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              🎓 Admissions Open 2026-2027
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">
              Begin Your Child's Journey
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Join Sri Vikas High School and give your child access to world-class education, experienced teachers, and modern facilities.
            </p>
            <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl inline-block">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Process</span>
            <h2 className="section-heading">Admission Process</h2>
            <p className="section-subheading mt-4">A simple 4-step process to enroll your child at Sri Vikas High School.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="relative text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <step.icon className="text-white text-2xl" />
                  </div>
                  <div className="absolute top-8 left-[65%] w-[70%] h-[2px] bg-primary/20 hidden md:block last:hidden" style={{ display: i === 3 ? 'none' : undefined }} />
                  <span className="inline-block bg-secondary text-white w-8 h-8 rounded-full text-sm font-bold leading-8 mb-3">{i + 1}</span>
                  <h4 className="text-lg font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Available Grades */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-accent/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Grades</span>
            <h2 className="section-heading">Available Grades</h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-primary text-white p-5 font-bold text-sm md:text-base">
                <span>Grade</span>
                <span>Age Group</span>
                <span>Availability</span>
              </div>
              {grades.map((g, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`grid grid-cols-3 p-5 text-sm md:text-base ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-primary/5 transition-colors`}
                >
                  <span className="font-semibold text-primary">{g.grade}</span>
                  <span className="text-gray-600">{g.age}</span>
                  <span className={`font-semibold ${g.seats === 'Limited' ? 'text-warm' : 'text-secondary'}`}>{g.seats}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Documents Required */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Checklist</span>
              <h2 className="section-heading mb-8">Documents Required</h2>
              <div className="space-y-3">
                {documents.map((doc, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-cream rounded-xl p-4"
                  >
                    <FaCheckCircle className="text-secondary flex-shrink-0" />
                    <span className="text-gray-700">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-3xl p-10 text-white">
                <FaCalendarAlt className="text-4xl text-accent mb-6" />
                <h3 className="text-2xl font-bold mb-4 font-[family-name:var(--font-heading)]">Important Dates</h3>
                <div className="space-y-4">
                  {[
                    { event: 'Application Opens', date: 'January 2026' },
                    { event: 'Last Date to Apply', date: 'March 2026' },
                    { event: 'Interaction Sessions', date: 'March-April 2026' },
                    { event: 'Results Announced', date: 'April 2026' },
                    { event: 'Session Begins', date: 'June 2026' },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/10 pb-3">
                      <span className="text-white/80">{item.event}</span>
                      <span className="font-bold text-accent">{item.date}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn-gold mt-8 block text-center">
                  Contact Admissions
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Admissions
