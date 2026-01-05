import Hero from './components/Hero.tsx'
import About from './components/About.tsx'
import AIWorkflow from './components/AIWorkflow.tsx'
import TechStack from './components/TechStack.tsx'
import Projects from './components/Projects.tsx'
import Contact from './components/Contact.tsx'

function App() {
  const containerClass = "max-w-7xl mx-auto px-6 py-16 md:py-24 lg:px-12"

  return (
    <div className="min-h-screen selection:bg-accent selection:text-white font-sans text-text">
       {/* Hero - BG */}
      <section className="bg-background">
        <div className={`${containerClass} pt-8 md:pt-16`}>
           <Hero />
        </div>
      </section>

      {/* About - Surface */}
      <section className="bg-surface">
         <div className={containerClass}>
           <About />
         </div>
      </section>

      {/* AI Workflow - BG */}
      <section className="bg-background">
         <div className={containerClass}>
           <AIWorkflow />
         </div>
      </section>

      {/* Tech Stack - Surface */}
      <section className="bg-surface">
         <div className={containerClass}>
           <TechStack />
         </div>
      </section>

      {/* Projects - BG */}
      <section className="bg-background">
         <div className={containerClass}>
           <Projects />
         </div>
      </section>

      {/* Contact - Surface */}
      <section className="bg-surface">
         <div className={`${containerClass} pb-8`}>
            <Contact />
            <footer className="mt-24 pt-12 border-t border-border text-sm text-muted text-center">
               &copy; {new Date().getFullYear()} Pangeran Borneo Silaen. All rights reserved.
            </footer>
         </div>
      </section>
    </div>
  )
}

export default App
