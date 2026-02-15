import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaExpand, FaTimes } from 'react-icons/fa'
import AnimatedSection from '../components/AnimatedSection'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = ['all', 'campus', 'academics', 'labs', 'transport', 'achievements', 'events', 'sports', 'safety']

  const galleryItems = [
    {
      id: 1,
      category: 'campus',
      title: 'School Identity Banner',
      description: 'Sri Vikas English Medium High School banner',
      image: '/images/school/banner-main.jpg',
    },
    {
      id: 2,
      category: 'campus',
      title: 'Campus Main Building',
      description: 'Wide view of school building and open ground',
      image: '/images/school/campus-main-building-wide.jpg',
    },
    {
      id: 3,
      category: 'campus',
      title: 'Campus Courtyard',
      description: 'School block and courtyard under tree shade',
      image: '/images/school/campus-main-building-courtyard.jpg',
    },
    {
      id: 4,
      category: 'campus',
      title: 'Main Block Front',
      description: 'Front perspective of Sri Vikas main block',
      image: '/images/school/campus-main-block-front.jpg',
    },
    {
      id: 5,
      category: 'campus',
      title: 'Campus Corridor',
      description: 'Open corridor and classroom access area',
      image: '/images/school/campus-corridor-view.jpg',
    },
    {
      id: 6,
      category: 'campus',
      title: 'Morning Assembly',
      description: 'Students gathered in the school ground',
      image: '/images/school/assembly-1.jpg',
    },
    {
      id: 7,
      category: 'campus',
      title: 'Assembly Ground View',
      description: 'Wide-angle view of students assembly',
      image: '/images/school/assembly-2.jpg',
    },
    {
      id: 8,
      category: 'campus',
      title: 'Assembly Ground Front',
      description: 'Assembly lineup view from the ground',
      image: '/images/school/assembly-ground-front.jpg',
    },
    {
      id: 9,
      category: 'campus',
      title: 'Assembly Aerial View',
      description: 'Students in formation captured from top view',
      image: '/images/school/assembly-ground-aerial.jpg',
    },
    {
      id: 10,
      category: 'campus',
      title: 'Assembly Aerial Wide',
      description: 'Large assembly formation with school buses behind',
      image: '/images/school/assembly-ground-aerial-2.jpg',
    },
    {
      id: 11,
      category: 'campus',
      title: 'Assembly - Green Uniform',
      description: 'Morning assembly in green house uniform',
      image: '/images/school/assembly-green-uniform-front.jpg',
    },
    {
      id: 12,
      category: 'campus',
      title: 'Green Uniform Assembly Wide',
      description: 'Wide frame of students in assembly',
      image: '/images/school/assembly-green-uniform-wide.jpg',
    },
    {
      id: 13,
      category: 'campus',
      title: 'Green Uniform Assembly Overview',
      description: 'Overall view of student lines and ground',
      image: '/images/school/assembly-green-uniform-overview.jpg',
    },
    {
      id: 14,
      category: 'transport',
      title: 'School Bus Fleet',
      description: 'Multiple school buses ready for student transport',
      image: '/images/school/transport-buses-front-angle.jpg',
    },
    {
      id: 15,
      category: 'transport',
      title: 'School Bus Side View',
      description: 'Dedicated bus with Sri Vikas branding',
      image: '/images/school/transport-school-bus-side.jpg',
    },
    {
      id: 16,
      category: 'academics',
      title: 'Classroom Teaching',
      description: 'Teacher conducting lesson on blackboard',
      image: '/images/school/classroom-teaching-board.jpg',
    },
    {
      id: 17,
      category: 'academics',
      title: 'Classroom Learning',
      description: 'Students engaged in classroom session',
      image: '/images/school/classroom-learning-wide.jpg',
    },
    {
      id: 18,
      category: 'academics',
      title: 'Classroom Session Board View',
      description: 'Learning session with full class participation',
      image: '/images/school/classroom-learning-board.jpg',
    },
    {
      id: 19,
      category: 'labs',
      title: 'Digital Lab Learning',
      description: 'Student using laptop in computer learning space',
      image: '/images/school/lab-computer-learning.jpg',
    },
    {
      id: 20,
      category: 'labs',
      title: 'Digital Lab Session',
      description: 'Technology-enabled learning in lab setup',
      image: '/images/school/lab-computer-learning-2.jpg',
    },
    {
      id: 21,
      category: 'events',
      title: 'Annual Day Celebration',
      description: 'Students and faculty during annual function',
      image: '/images/school/annual-day.jpg',
    },
    {
      id: 22,
      category: 'events',
      title: 'Sankranti Stage Banner',
      description: 'Festival celebration stage setup',
      image: '/images/school/sankranti-banner.jpg',
    },
    {
      id: 23,
      category: 'events',
      title: 'Krishna Fancy Dress',
      description: 'Cultural costume performance',
      image: '/images/school/krishna-costume.jpg',
    },
    {
      id: 24,
      category: 'events',
      title: 'Event Seating Area',
      description: 'Children seated during school celebration',
      image: '/images/school/event-children-seated.jpg',
    },
    {
      id: 25,
      category: 'events',
      title: 'Auditorium Visit',
      description: 'Students attending educational theatre outing',
      image: '/images/school/sports-kabaddi-session.jpg',
    },
    {
      id: 26,
      category: 'achievements',
      title: 'Medal Winner - Boy',
      description: 'Student achiever with medal',
      image: '/images/school/medal-boy.jpg',
    },
    {
      id: 27,
      category: 'achievements',
      title: 'Medal Winner - Girl',
      description: 'Student achiever with medal',
      image: '/images/school/medal-girl.jpg',
    },
    {
      id: 28,
      category: 'achievements',
      title: 'Medal Winners Group',
      description: 'Students proudly showing medals',
      image: '/images/school/medal-team.jpg',
    },
    {
      id: 29,
      category: 'achievements',
      title: 'Medal Winner - Girl 1',
      description: 'Individual achiever portrait with medal',
      image: '/images/school/medal-girl-1.jpg',
    },
    {
      id: 30,
      category: 'achievements',
      title: 'Medal Winner - Girl 2',
      description: 'Student achiever portrait with medal',
      image: '/images/school/medal-girl-2.jpg',
    },
    {
      id: 31,
      category: 'achievements',
      title: 'Medal Winner - Boy 1',
      description: 'Senior student with achievement medal',
      image: '/images/school/medal-boy-1.jpg',
    },
    {
      id: 32,
      category: 'achievements',
      title: 'Medal Winner - Boy 2',
      description: 'Student achiever portrait with medal',
      image: '/images/school/medal-boy-2.jpg',
    },
    {
      id: 33,
      category: 'achievements',
      title: 'Award Winners Team',
      description: 'Boys team holding medals after competition',
      image: '/images/school/awards-team-boys-group.jpg',
    },
    {
      id: 34,
      category: 'sports',
      title: 'Sports Group Team',
      description: 'Student sports team with faculty mentors',
      image: '/images/school/group-sports-team.jpg',
    },
    {
      id: 35,
      category: 'sports',
      title: 'Sports Day Group Photo',
      description: 'Sports participants with teachers on field',
      image: '/images/school/sports-group-photo.jpg',
    },
    {
      id: 36,
      category: 'sports',
      title: 'Kabaddi Session',
      description: 'Students actively participating in kabaddi',
      image: '/images/school/auditorium-student-visit.jpg',
    },
    {
      id: 37,
      category: 'safety',
      title: 'Campus CCTV Safety',
      description: 'Security camera monitoring school premises',
      image: '/images/school/safety-cctv-camera.jpg',
    },
    {
      id: 38,
      category: 'academics',
      title: 'School Emblem',
      description: 'Official Sri Vikas High School logo',
      image: '/images/school/logo-square.jpg',
    },
    {
      id: 39,
      category: 'academics',
      title: 'Sri Vikas Logo Poster',
      description: 'School branding poster artwork',
      image: '/images/school/logo-main-square.jpg',
    },
    {
      id: 40,
      category: 'academics',
      title: 'SSC Results 2024-25',
      description: 'Top scorers results poster',
      image: '/images/school/results-poster-red.jpg',
    },
    {
      id: 41,
      category: 'academics',
      title: 'Topper 589/600',
      description: 'Sri Vikas topper achievement poster',
      image: '/images/school/topper-poster-green.jpg',
    },
    {
      id: 42,
      category: 'academics',
      title: 'Admissions Poster',
      description: 'Sri Vikas E.M. High School admissions',
      image: '/images/school/admissions-poster.jpg',
    },
  ]

  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter(item => item.category === activeFilter)

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
            <span className="hero-badge mb-4">Our Campus</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-[family-name:var(--font-heading)]">Gallery</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">Take a virtual tour of our campus, facilities, and memorable events.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm capitalize transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </AnimatedSection>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <FaExpand className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <h4 className="font-bold text-primary text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-400 capitalize">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full max-h-[85vh] object-contain rounded-3xl bg-black"
            />
            <div className="absolute left-0 right-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-3xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{selectedImage.title}</h3>
              <p className="text-white/80 text-sm md:text-base">{selectedImage.description}</p>
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-colors cursor-pointer"
            >
              <FaTimes />
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Infrastructure Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">Facilities</span>
            <h2 className="section-heading">Our Infrastructure</h2>
            <p className="section-subheading mt-4">Modern facilities designed for comprehensive learning and development.</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Classrooms',
                desc: 'Digital boards and interactive teaching for activity-based learning.',
                image: '/images/school/classroom-learning-wide.jpg',
              },
              {
                title: 'Science & Computer Labs',
                desc: 'Technology-enabled spaces for practical and digital education.',
                image: '/images/school/lab-computer-learning.jpg',
              },
              {
                title: 'Sports Complex',
                desc: 'Structured sports activities for fitness, teamwork, and leadership.',
                image: '/images/school/auditorium-student-visit.jpg',
              },
              {
                title: 'Campus Infrastructure',
                desc: 'Spacious corridors and well-planned academic blocks.',
                image: '/images/school/campus-corridor-view.jpg',
              },
              {
                title: 'Auditorium & Exposure',
                desc: 'Educational visits and large group learning experiences.',
                image: '/images/school/sports-kabaddi-session.jpg',
              },
              {
                title: 'Transport & Safety',
                desc: 'Reliable buses and CCTV-enabled campus monitoring for student safety.',
                image: '/images/school/transport-buses-front-angle.jpg',
              },
            ].map((facility, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={facility.image}
                      alt={`${facility.title} at Sri Vikas High School`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-primary mb-2 font-[family-name:var(--font-heading)]">{facility.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{facility.desc}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Gallery
