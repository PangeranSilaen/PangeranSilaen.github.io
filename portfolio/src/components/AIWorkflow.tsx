

const AIWorkflow = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-xs font-sans tracking-widest uppercase text-text/50 sticky top-24 pt-4 md:pt-0 border-t md:border-t-0 border-border/50 md:border-none w-12 md:w-auto">02 — Workflow</h2>
      </div>
      
      <div className="md:col-span-8">
        <div className="bg-surface p-6 md:p-12 border border-border -mx-6 md:mx-0 px-8 md:px-12">
           <h3 className="text-2xl md:text-3xl font-serif mb-6">Building with AI as a collaborator</h3>
           <ul className="space-y-4 text-text/80 editorial-text">
             <li className="flex gap-4">
               <span className="text-primary">—</span>
               <span>Idea exploration and problem framing</span>
             </li>
             <li className="flex gap-4">
               <span className="text-primary">—</span>
               <span>Rapid prototyping and boilerplate generation</span>
             </li>
             <li className="flex gap-4">
               <span className="text-primary">—</span>
               <span>Debugging and refactoring assistance</span>
             </li>
             <li className="flex gap-4">
               <span className="text-primary">—</span>
               <span>Faster iteration without sacrificing clarity</span>
             </li>
           </ul>
        </div>
      </div>
    </section>
  )
}

export default AIWorkflow
