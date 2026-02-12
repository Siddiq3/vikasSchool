import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaChild, FaBookReader, FaGraduationCap, FaFlask, FaFutbol, FaPaintBrush, FaLaptopCode, FaMusic, FaGlobe, FaChess, FaLeaf, FaRobot } from 'react-icons/fa'
import { IoSchoolSharp } from 'react-icons/io5'
import AnimatedSection from '../components/AnimatedSection'

const Programmes = () => {
  const programs = [
    {
      icon: FaChild,
      title: 'Pre-Primary (Nursery - UKG)',
      age: 'Ages 3-5',
      description: 'A playful and nurturing environment where young learners explore, discover, and build foundational skills through creative play-based learning activities.',
      highlights: ['Activity-based learning', 'Phonics & early literacy', 'Sensory development', 'Social skills building'],
      image: '/images/school/event-children-seated.jpg',
      color: 'from-secondary to-secondary-light',
      bg: 'bg-secondary/10',
    },
    {
      icon: FaBookReader,
      title: 'Primary School (Grades 1-5)',
      age: 'Ages 6-10',
      description: 'Building strong academic foundations with emphasis on reading, writing, mathematics, and developing critical thinking abilities through interactive learning.',
      highlights: ['Strong foundational academics', 'Environmental studies', 'Art & craft integration', 'Digital literacy basics'],
      image: '/images/school/classroom-learning-wide.jpg',
      color: 'from-primary to-primary-light',
      bg: 'bg-primary/10',
    },
    {
      icon: FaGraduationCap,
      title: 'Middle School (Grades 6-8)',
      age: 'Ages 11-13',
      description: 'Comprehensive curriculum designed to develop analytical skills, subject mastery, and prepare students for the challenges of higher education.',
      highlights: ['Subject specialization', 'Science & math labs', 'Language proficiency', 'Research projects'],
      image: '/images/school/classroom-teaching-board.jpg',
      color: 'from-secondary to-secondary-light',
      bg: 'bg-secondary/10',
    },
    {
      icon: IoSchoolSharp,
      title: 'High School (Grades 9-10)',
      age: 'Ages 14-16',
      description: 'Rigorous academic program preparing students for board examinations with expert faculty, dedicated mentorship, and comprehensive study support.',
      highlights: ['Board exam preparation', 'Career counseling', 'Advanced labs', 'Competitive exam coaching'],
      image: '/images/school/lab-computer-learning.jpg',
      color: 'from-warm to-warm-light',
      bg: 'bg-warm/10',
    },
  ]

  const coCurricular = [
    { icon: FaFutbol, name: 'Sports', desc: 'Cricket, Football, Basketball, Athletics' },
    { icon: FaPaintBrush, name: 'Visual Arts', desc: 'Drawing, Painting, Clay Modeling' },
    { icon: FaMusic, name: 'Performing Arts', desc: 'Music, Dance, Drama' },
    { icon: FaLaptopCode, name: 'Technology', desc: 'Coding, Robotics, Digital Skills' },
    { icon: FaChess, name: 'Mind Sports', desc: 'Chess, Quiz, Debates' },
    { icon: FaLeaf, name: 'Eco Club', desc: 'Environmental Awareness, Gardening' },
    { icon: FaGlobe, name: 'Languages', desc: 'Hindi, Telugu, Sanskrit, English' },
    { icon: FaRobot, name: 'STEM Lab', desc: 'Science, Technology, Engineering' },
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
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="hero-badge mb-4">Academic Programs</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">Our Programmes</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Comprehensive education designed to nurture every child's unique potential from pre-primary to high school.</p>
          </motion.div>
        </div>
      </section>

      {/* Programs Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-16">
            {programs.map((program, index) => (
              <AnimatedSection key={index} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                    <div className={`${program.bg} rounded-3xl p-10`}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6`}>
                        <program.icon className="text-white text-2xl" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">
                        {program.title}
                      </h3>
                      <p className="text-secondary font-semibold mb-4">{program.age}</p>
                      <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                      <h4 className="font-bold text-primary mb-3">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-2 text-gray-600">
                            <span className="w-2 h-2 bg-secondary rounded-full flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                    <div className="w-full h-[350px] rounded-3xl bg-cream overflow-hidden shadow-lg">
                      <img
                        src={program.image}
                        alt={`${program.title} at Sri Vikas High School`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Beyond Academics</span>
            <h2 className="section-heading">Co-Curricular Activities</h2>
            <p className="section-subheading mt-4">A wide range of activities for holistic development of every student.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {coCurricular.map((activity, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <activity.icon className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">{activity.name}</h4>
                  <p className="text-sm text-gray-500">{activity.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary via-primary-light to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-[family-name:var(--font-heading)]">Ready to Enroll Your Child?</h2>
            <p className="text-xl text-white/90 mb-8">Join the Sri Vikas family and give your child the best foundation for a bright future.</p>
            <Link to="/admissions" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl inline-block">
              Apply Now
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}

export default Programmes
