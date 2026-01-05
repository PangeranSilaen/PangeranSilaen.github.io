
// Placeholder images or use what we have
// If images are missing, we use colored blocks or placeholders

const projects = [
  {
    id: 1,
    title: "SIAKAD TK PermataBunda",
    role: "Full-stack development",
    tech: ["Laravel", "Filament"],
    description: "A comprehensive academic system for kindergarten operations, including student management, teacher administration, and tuition payments.",
    link: "https://github.com/PangeranSilaen/PermataKiddo" // Derived from index.html
  },
  {
    id: 2,
    title: "BahanKu — Mobile Application",
    role: "Mobile UI, State Management",
    tech: ["React Native"],
    description: "A React Native mobile app designed to help users manage and explore cooking ingredients efficiently.",
    link: null // User said "nanti aja" for details/link, but text is here.
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    role: "Design & Development",
    tech: ["Vite", "React", "Tailwind"],
    description: "An experimental space to explore UI, branding, and modern web presentation.",
    link: "https://github.com/PangeranSilaen/PangeranSilaen.github.io"
  }
]

const Projects = () => {


  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-xs font-sans tracking-widest uppercase text-text/50 sticky top-24 pt-4 md:pt-0 border-t md:border-t-0 border-border/50 md:border-none w-12 md:w-auto">04 — Selected Work</h2>
      </div>
      
      <div className="md:col-span-8 space-y-12">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group py-8 md:py-12 border-t border-border first:border-0 relative cursor-default"

          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h3 className="text-2xl md:text-3xl font-serif text-text group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <span className="text-sm text-text/50 font-sans mt-2 md:mt-0">{project.role}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <div className="text-text/80 editorial-text">
                 <p>{project.description}</p>
                 {project.link && (
                   <a 
                     href={project.link} 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-block mt-4 text-sm font-medium border-b border-muted/20 hover:border-primary text-primary transition-all"
                   >
                     View Project &rarr;
                   </a>
                 )}
               </div>
               
               <div className="flex flex-wrap gap-2 content-start md:justify-end">
                 {project.tech.map(t => (
                   <span key={t} className="text-xs bg-surface border border-border px-3 py-1 rounded-full text-muted">
                     {t}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
