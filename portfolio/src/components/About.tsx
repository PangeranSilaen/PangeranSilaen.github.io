
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-xs font-sans tracking-widest uppercase text-text/50 sticky top-24 pt-4 md:pt-0 border-t md:border-t-0 border-border/50 md:border-none w-12 md:w-auto">01 — About</h2>
      </div>
      
      <div className="md:col-span-8 space-y-12">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
            Collaborator, <span className="block md:inline">not just a coder.</span>
            <span className="text-text/60 italic block mt-2 md:mt-0">Mindset over bio.</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 editorial-text text-lg text-text/80">
            <div>
              <p className="mb-6">
                I don't just write code; I orchestrate solutions. My approach to development is rooted in a deep understanding of standard web technologies combined with modern efficiency.
              </p>
              <p>
                Whether it's a comprehensive academic system or a mobile application, I focus on the structural integrity of the software and the fluidity of the user experience.
              </p>
            </div>
            <div>
              <p className="mb-6">
                I use AI as a collaborator—a tool to explore ideas faster, debug efficiently, and iterate on designs. 
              </p>
              <p>
                However, I remain the architect. The logic, the decisions, and the final quality are always under my strict control.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
