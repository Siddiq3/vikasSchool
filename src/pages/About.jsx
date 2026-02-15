import { motion } from 'framer-motion'
import { FaGraduationCap, FaTrophy, FaHeart, FaStar, FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'
import StatsCounter from '../components/StatsCounter'

const About = () => {
  const values = [
    { icon: FaGraduationCap, title: 'Excellence', description: 'Striving for the highest standards in academics and character.' },
    { icon: FaHeart, title: 'Compassion', description: 'Fostering empathy and kindness in every interaction.' },
    { icon: FaHandshake, title: 'Integrity', description: 'Building trust through honesty and ethical conduct.' },
    { icon: FaStar, title: 'Innovation', description: 'Embracing creativity and forward-thinking approaches.' },
  ]

  const team = [
    {
      name: 'Correspondent',
      role: 'School Correspondent',
      image: '/images/school/correspondent.jpg',
      alt: 'Sri Vikas High School correspondent at office desk',
    },
    { name: 'Vice Principal', role: 'Vice Principal', placeholder: 'VP' },
    { name: 'Academic Head', role: 'Head of Academics', placeholder: 'AH' },
    { name: 'Sports Director', role: 'Director of Sports', placeholder: 'SD' },
  ]

  const achievements = [
    '100% pass rate in board examinations for the last 10 years',
    'Multiple state-level science olympiad winners',
    'Consistent academic and co-curricular recognition',
    'District-level sports champions across multiple disciplines',
    'Awarded for excellence in environmental education',
    'Recognized among reputed schools in Andhra Pradesh',
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Banner */}
      <section className="relative py-32 bg-gradient-to-br from-primary via-primary-light to-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-80 h-80 bg-accent/10 rounded-full"
        />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="hero-badge mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">Our Story & Vision</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Learn about our journey, mission, and commitment to shaping the future of education.</p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="w-full h-[400px] rounded-3xl bg-cream shadow-xl overflow-hidden">
                  <img
                    src="/images/school/campus-main-building-wide.jpg"
                    alt="Sri Vikas High School campus main building"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-3xl -z-10" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Our History</span>
              <h2 className="section-heading mb-6">25+ Years of Educational Excellence</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sri Vikas High School was established with a vision to provide world-class education that goes beyond textbooks. Over the past 25 years, we have grown from a small school to one of the most respected educational institutions in Koilkuntla, Andhra Pradesh.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our founders believed that every child deserves an environment where they can discover their true potential. This philosophy continues to guide everything we do — from our curriculum design to our campus culture.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Sri Vikas High School stands as a beacon of educational excellence, with thousands of alumni making their mark across the globe.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-10 shadow-lg h-full">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                  <FaBullseye className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide a nurturing and stimulating educational environment that empowers students to become lifelong learners, critical thinkers, and responsible citizens who contribute positively to society.
                </p>
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <motion.div whileHover={{ y: -5 }} className="bg-white rounded-3xl p-10 shadow-lg h-full">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <FaEye className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 font-[family-name:var(--font-heading)]">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading educational institution recognized for academic excellence, innovation in teaching, and commitment to holistic student development — nurturing leaders who shape a better tomorrow.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-accent/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Our Values</span>
            <h2 className="section-heading">Core Values We Live By</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -10, scale: 1.02 }} className="bg-cream rounded-3xl p-8 text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="text-primary text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary-light to-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={95} suffix="%" label="Board Exam Pass Rate" delay={0} />
            <StatsCounter end={150} suffix="+" label="Dedicated Faculty" delay={0.1} />
            <StatsCounter end={2000} suffix="+" label="Students Enrolled" delay={0.2} />
            <StatsCounter end={25} suffix="+" label="Years of Excellence" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Leadership</span>
            <h2 className="section-heading">Our Team</h2>
            <p className="section-subheading mt-4">Meet the dedicated leaders guiding Sri Vikas High School.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="bg-white rounded-3xl overflow-hidden shadow-lg text-center">
                  <div className="h-48 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                    {member.image ? (
                      <img src={member.image} alt={member.alt || member.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-5xl font-bold text-white/50">{member.placeholder}</span>
                    )}
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-primary font-[family-name:var(--font-heading)]">{member.name}</h4>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="inline-block bg-accent/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Achievements</span>
              <h2 className="section-heading mb-8">Our Proud Achievements</h2>
              <div className="space-y-4">
                {achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <FaTrophy className="text-accent text-lg mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{achievement}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/images/school/awards-team-boys-group.jpg"
                  alt="Sri Vikas students with medals and achievements"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default About
