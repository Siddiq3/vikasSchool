import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGraduationCap, FaFlask, FaFutbol, FaPaintBrush, FaLaptopCode, FaBookReader, FaStar, FaTrophy, FaChevronDown, FaQuoteLeft, FaChild, FaChalkboardTeacher, FaMapMarkerAlt } from 'react-icons/fa'
import { MdScience, MdSportsKabaddi } from 'react-icons/md'
import { IoSchoolSharp } from 'react-icons/io5'
import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import StatsCounter from '../components/StatsCounter'

/* ─── Hero Section ─── */
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-primary-dark">
    {/* Animated background shapes */}
    <div className="absolute inset-0">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/10 rounded-full"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-4 h-4 bg-accent rounded-full"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/30 rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/5 w-6 h-6 bg-secondary/20 rounded-full"
      />
    </div>

    {/* Grid pattern overlay */}
    <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-badge mb-6"
            >
              ✨ Welcome to Sri Vikas High School
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.12] mb-6 font-[family-name:var(--font-heading)] drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]">
              Nurturing{' '}
              <span className="text-yellow-200 [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">Excellence,</span>
              <br />
              Building{' '}
              <span className="text-cyan-100 [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">Futures</span>
            </h1>
            <p className="text-lg md:text-xl text-white/95 mb-8 max-w-xl leading-relaxed">
              At Sri Vikas High School, we redefine learning by combining academic excellence with a deep commitment to holistic development. Our world-class facilities and passionate educators ensure every child thrives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Schedule a Visit
              </Link>
              <Link to="/about" className="btn-secondary !bg-transparent !text-white !border-white hover:!bg-white/10">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative block mt-6 lg:mt-0"
        >
          <div className="relative">
            {/* Main image placeholder */}
            <div className="w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-[500px] rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden relative">
              <img
                src="/images/school/logo-main-square.jpg"
                alt="Sri Vikash High School logo"
                className="w-full h-full object-contain lg:object-cover bg-white"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/30 via-transparent to-transparent" />
            </div>

          </div>
        </motion.div>
      </div>
    </div>

    {/* Bottom wave */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
        <path d="M0 50L48 45.8C96 41.7 192 33.3 288 29.2C384 25 480 25 576 33.3C672 41.7 768 58.3 864 62.5C960 66.7 1056 58.3 1152 50C1248 41.7 1344 33.3 1392 29.2L1440 25V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" fill="white"/>
      </svg>
    </div>
  </section>
)

/* ─── Stats Section ─── */
const StatsSection = () => (
  <section className="relative -mt-6 sm:-mt-10 lg:-mt-16 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="bg-gradient-to-r from-primary via-primary-light to-primary rounded-3xl p-8 md:p-12 shadow-2xl -mt-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatsCounter end={95} suffix="%" label="Graduates in Top Universities" delay={0} />
          <StatsCounter end={40} suffix="+" label="Co-Curricular Activities" delay={0.1} />
          <StatsCounter end={2000} suffix="+" label="Happy Students" delay={0.2} />
          <StatsCounter end={25} suffix="+" label="Years of Excellence" delay={0.3} />
        </div>
      </div>
    </div>
  </section>
)

/* ─── Awards Marquee ─── */
const AwardsMarquee = () => {
  const awards = [
    { icon: FaTrophy, text: 'Academic Excellence' },
    { icon: FaStar, text: 'Sri Vikas High School' },
    { icon: FaTrophy, text: 'Holistic Development' },
    { icon: FaStar, text: 'Safe & Supportive Campus' },
  ]

  return (
    <section className="py-8 bg-cream overflow-hidden">
      <div className="flex animate-marquee">
        {[...awards, ...awards, ...awards].map((award, i) => (
          <div key={i} className="flex items-center gap-3 mx-8 whitespace-nowrap">
            <award.icon className="text-warm text-2xl" />
            <span className="text-xl md:text-2xl font-bold text-primary font-[family-name:var(--font-heading)]">{award.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ─── Programs Section ─── */
const ProgramsSection = () => {
  const programs = [
    {
      icon: FaChild,
      title: 'Pre-Primary',
      subtitle: 'Ages 3-5',
      description: 'A playful and nurturing environment where young learners explore, discover, and build foundational skills through creative activities.',
      color: 'from-secondary to-secondary-light',
      bg: 'bg-secondary/10',
    },
    {
      icon: FaBookReader,
      title: 'Primary School',
      subtitle: 'Grades 1-5',
      description: 'Building strong academic foundations with emphasis on reading, writing, mathematics, and critical thinking development.',
      color: 'from-primary to-primary-light',
      bg: 'bg-primary/10',
    },
    {
      icon: FaGraduationCap,
      title: 'Middle School',
      subtitle: 'Grades 6-8',
      description: 'Comprehensive curriculum designed to develop analytical skills, subject mastery, and prepare students for higher education.',
      color: 'from-secondary to-secondary-light',
      bg: 'bg-secondary/10',
    },
    {
      icon: IoSchoolSharp,
      title: 'High School',
      subtitle: 'Grades 9-10',
      description: 'Rigorous academic program preparing students for board examinations with expert faculty and dedicated mentorship.',
      color: 'from-warm to-warm-light',
      bg: 'bg-warm/10',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Our Programmes
          </span>
          <h2 className="section-heading">
            Our Programs at Sri Vikas High School
          </h2>
          <p className="section-subheading mt-4">
            Comprehensive education from pre-primary to high school, designed to nurture every child's unique potential.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className={`${program.bg} rounded-3xl p-8 h-full border border-gray-100 hover:shadow-2xl transition-shadow duration-300 group`}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <program.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1 font-[family-name:var(--font-heading)]">
                  {program.title}
                </h3>
                <p className="text-sm text-secondary font-semibold mb-3">{program.subtitle}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{program.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── About / Featured Section ─── */
const FeaturedSection = () => (
  <section className="py-20 bg-light-blue">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection direction="left">
          <div className="relative">
            <div className="w-full h-[450px] rounded-3xl bg-white shadow-xl overflow-hidden">
              <img
                src="/images/school/classroom-learning-wide.jpg"
                alt="Sri Vikas High School classroom learning session"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/10 rounded-3xl -z-10" />
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Innovation Hub
          </span>
          <h2 className="section-heading mb-6">
            Smart Classrooms at Sri Vikas
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Sri Vikas High School is proud to feature state-of-the-art smart classrooms and modern learning labs. Our collaboration with leading edtech platforms brings cutting-edge experiential learning to our campus.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            This partnership aligns with our mission to empower students not just through textbook knowledge, but by nurturing real-world skills, creativity, and innovation.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: FaLaptopCode, text: 'Computer Labs' },
              { icon: FaFlask, text: 'Science Labs' },
              { icon: MdScience, text: 'Innovation Hub' },
              { icon: FaPaintBrush, text: 'Art Studios' },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                <Icon className="text-secondary text-xl" />
                <span className="text-sm font-semibold text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
)

/* ─── Discover Section ─── */
const DiscoverSection = () => (
  <section className="py-20 bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
    {/* Background decorations */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      className="absolute top-10 right-10 w-64 h-64 border border-white/5 rounded-full"
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      className="absolute bottom-10 left-10 w-48 h-48 border border-white/5 rounded-full"
    />

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <span className="hero-badge mb-4">
            Discover More
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
            Discover the Future at Sri Vikas High School
          </h2>
          <p className="text-white/80 leading-relaxed mb-8 text-lg">
            At Sri Vikas High School, your child's learning journey is crafted with care and vision. Our focus on modern teaching methods, digital tools, and future-ready skills ensures students stay ahead in an ever-changing world.
          </p>
          <p className="text-white/70 leading-relaxed mb-8">
            Enroll today and experience a school where excellence, innovation, and joyful learning go hand in hand.
          </p>
          <Link to="/admissions" className="btn-gold">
            Enroll Now
          </Link>
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2}>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: FaGraduationCap, title: 'Academic Excellence', desc: 'Top results year after year', color: 'bg-primary/20' },
              { icon: FaChalkboardTeacher, title: 'Expert Faculty', desc: 'Personal guidance in every class', color: 'bg-secondary/20' },
              { icon: FaFutbol, title: 'Sports & Activities', desc: 'Holistic development', color: 'bg-warm/20' },
              { icon: FaLaptopCode, title: 'Tech-Ready', desc: 'Modern digital learning', color: 'bg-primary-dark/20' },
            ].map(({ icon: Icon, title, desc, color }, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`${color} backdrop-blur-sm rounded-2xl p-6 border border-white/10`}
              >
                <Icon className="text-3xl text-accent mb-3" />
                <h4 className="font-bold text-lg mb-1">{title}</h4>
                <p className="text-white/85 text-sm">{desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
)

/* ─── Why Choose Us ─── */
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaGraduationCap,
      title: 'Academic Excellence',
      description: 'A strong foundation through a structured curriculum designed to promote conceptual clarity, analytical thinking, and real-world application.',
    },
    {
      icon: FaFlask,
      title: 'Innovative Learning Facilities',
      description: 'Advanced labs, smart classrooms, and modern science labs that nurture creativity, tech-savviness, and scientific inquiry from a young age.',
    },
    {
      icon: MdSportsKabaddi,
      title: 'Holistic Child Development',
      description: 'Focus on intellectual, emotional, physical, and social growth through co-curricular activities, sports, and personality development programs.',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Safe & Nurturing Environment',
      description: 'A vibrant, secure, and accessible campus environment for families seeking the best education with care and commitment.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <span className="inline-block bg-accent/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              Why Sri Vikas?
            </span>
            <h2 className="section-heading mb-6">
              Why Choose Sri Vikas High School?
            </h2>
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 group"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <reason.icon className="text-xl text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary mb-1 font-[family-name:var(--font-heading)]">{reason.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="relative">
              <div className="w-full h-[500px] rounded-3xl bg-cream overflow-hidden shadow-xl">
                <img
                  src="/images/school/campus-main-block-front.jpg"
                  alt="Sri Vikas High School main block and ground"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 rounded-3xl -z-10" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ Section ─── */
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What curriculum does Sri Vikas High School follow?',
      answer: 'Sri Vikas High School follows a comprehensive curriculum designed to develop critical thinking, problem-solving, and lifelong learning skills in students. We focus on both academic excellence and overall personality development.',
    },
    {
      question: 'What grades are offered at the school?',
      answer: 'We offer education from Pre-Primary (Nursery, LKG, UKG) through High School (up to Grade 10). Each level has age-appropriate curriculum and teaching methodologies.',
    },
    {
      question: 'Are there any special facilities available?',
      answer: 'Yes! We have smart classrooms, modern science labs, computer labs, a well-stocked library, sports grounds, art studios, and a dedicated auditorium for cultural activities.',
    },
    {
      question: 'Does the school offer co-curricular and sports programs?',
      answer: 'Absolutely! We offer a wide range of co-curricular activities including sports (cricket, football, basketball, athletics), arts (music, dance, painting), and clubs (science club, literary club, eco club).',
    },
    {
      question: 'Where is the school located?',
      answer: 'Sri Vikash High School is located on Gunjalapadu Rd, Koilkuntla, Andhra Pradesh 518134. You can find the exact location from our Contact page map link.',
    },
    {
      question: 'What makes Sri Vikas different from other schools?',
      answer: 'Our unique blend of academic rigor, innovative teaching methods, holistic development focus, experienced faculty, and state-of-the-art infrastructure sets us apart. We don\'t just prepare students for exams—we prepare them for life.',
    },
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-4xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            FAQs
          </span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
                layout
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-primary pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <FaChevronDown className="text-secondary" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Testimonials Section ─── */
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Parent',
      text: 'Sri Vikas High School has been a wonderful experience for my child. The teachers are caring and dedicated, and the school offers a perfect balance of academics and extracurricular activities.',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      text: 'We are extremely happy with the education quality at Sri Vikas. The school\'s focus on holistic development has truly helped our son grow into a confident young person.',
    },
    {
      name: 'Anitha Reddy',
      role: 'Parent',
      text: 'The infrastructure and teaching methodology at Sri Vikas is outstanding. My daughter loves going to school every day and that says everything about the positive environment here.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-block bg-accent/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="section-heading">What Parents Say</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-light-blue rounded-3xl p-8 h-full relative"
              >
                <FaQuoteLeft className="text-4xl text-primary/10 absolute top-6 left-6" />
                <div className="relative z-10">
                  <p className="text-gray-600 leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-primary">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA / Campus Tour Section ─── */
const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
      <AnimatedSection>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-[family-name:var(--font-heading)]">
          Book Your Campus Tour Today!
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Discover the heart of our community — take a campus tour and experience firsthand where learning, connection, and opportunity help your child grow.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-block">
            Book a Tour
          </Link>
          <a href="tel:+919441629842" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-block">
            Call Us Now
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
)

/* ─── Home Page Component ─── */
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <StatsSection />
      <AwardsMarquee />
      <ProgramsSection />
      <FeaturedSection />
      <DiscoverSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </motion.div>
  )
}

export default Home
