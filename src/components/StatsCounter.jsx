import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const StatsCounter = ({ end, suffix = '', prefix = '', label, icon, delay = 0 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-[family-name:var(--font-heading)]">
        {prefix}
        {inView && <CountUp end={end} duration={2.5} separator="," />}
        {suffix}
      </div>
      <p className="text-white/80 text-sm md:text-base">{label}</p>
    </motion.div>
  )
}

export default StatsCounter
