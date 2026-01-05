
import { motion } from 'framer-motion'
// Placeholder image until user provides real one, or use a solid color/pattern
// d:\Data\Documents\GitHub\PangeranSilaen.github.io\portfolio\assets (need to check assets or use public)

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col pt-12 md:pt-0 relative">
      {/* Mobile visual anchor */}
      <div className="absolute top-0 left-0 w-16 h-1 bg-border md:hidden"></div>
      
      {/* 1. HEADLINE (Mobile First) */}
      <div className="md:w-3/5 mb-8 md:mb-0 relative z-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif text-text leading-[1.1] md:leading-tight tracking-tight mt-8 md:mt-0"
        >
          I build digital products with a modern, thoughtful, and AI-assisted approach.
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 md:gap-24 relative">
        
        {/* 2. IMAGE (Mobile: Centered as requested) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full md:w-2/5 md:absolute md:right-0 md:top-[-120px] lg:top-[-180px] z-10 flex justify-center md:justify-end pointer-events-none md:pointer-events-auto mt-4 md:mt-0"
        >
          <div className="relative w-[65%] md:w-80 md:h-[28rem] aspect-[3/4] self-center md:self-end">
             {/* Offset decoration - slightly different style for center mobile */}
            <div className="absolute -top-3 -right-3 w-full h-full border border-border -z-10 block"></div>
            
            {/* Profile image */}
            <img 
              src="/foto.jpg" 
              alt="Pangeran Borneo Silaen"
              className="w-full h-full object-cover grayscale contrast-110 brightness-105" 
            />
          </div>
        </motion.div>

        {/* 3. COPY & CTA (Mobile: After Image) */}
        <div className="md:w-3/5 space-y-8 md:mt-12">
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-8 max-w-xl"
          >
            {/* Divider / Label */}
            <div className="w-12 border-t border-border pt-4">
               <span className="text-xs font-sans tracking-[0.2em] uppercase text-text/40 block">About</span>
            </div>

            <p className="text-xl md:text-2xl text-text/90 editorial-text leading-relaxed">
              Web and mobile developer focused on React, Laravel, and clean UI. 
              I use AI as a collaborator — from ideation to iteration — while keeping full control over logic and design decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
              <a href="#projects" className="inline-block bg-primary text-white text-center px-8 py-4 hover:bg-opacity-90 transition-all tracking-wide text-sm font-medium shadow-sm hover:shadow-md">
                View Work
              </a>
              <a href="#about" className="text-primary border-b border-primary/30 hover:border-primary transition-colors pb-1 text-sm font-medium w-max">
                About Me
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
