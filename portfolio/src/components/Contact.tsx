

const Contact = () => {
  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-24">
      <div className="md:col-span-4">
        <h2 className="text-xs font-sans tracking-widest uppercase text-text/50 sticky top-24 pt-4 md:pt-0 border-t md:border-t-0 border-border/50 md:border-none w-12 md:w-auto">05 — Contact</h2>
      </div>
      
      <div className="md:col-span-8">
        <h3 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">
          Open to discussions, collaborations, and new ideas.
        </h3>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 pt-8">
          <div>
            <span className="block text-xs uppercase text-text/40 mb-2">Email</span>
            <a href="mailto:pangeranborneo9@gmail.com" className="text-lg hover:text-primary transition-colors">
              pangeranborneo9@gmail.com
            </a>
          </div>
          <div>
            <span className="block text-xs uppercase text-text/40 mb-2">Social</span>
            <div className="flex gap-6">
              <a href="https://github.com/PangeranSilaen" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/pangeran-borneo-silaen-973034347/" target="_blank" rel="noreferrer" className="text-lg hover:text-primary transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
