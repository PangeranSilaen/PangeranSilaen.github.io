

const TechStack = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-12">
      <div className="md:col-span-4">
        <h2 className="text-xs font-sans tracking-widest uppercase text-text/50 sticky top-24 pt-4 md:pt-0 border-t md:border-t-0 border-border/50 md:border-none w-12 md:w-auto">03 — Stack</h2>
      </div>
      
      <div className="md:col-span-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 md:gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 -mx-6 md:mx-0 px-6 md:px-0 scrollbar-hide">
          
          <div className="space-y-4">
             <h4 className="font-serif text-lg italic opacity-70">Frontend</h4>
             <ul className="text-sm space-y-2 editorial-text">
               <li>Vite</li>
               <li>React</li>
               <li>Tailwind CSS</li>
             </ul>
          </div>

          <div className="space-y-4">
             <h4 className="font-serif text-lg italic opacity-70">Backend</h4>
             <ul className="text-sm space-y-2 editorial-text">
               <li>Laravel</li>
               <li>Node.js</li>
               <li>Express</li>
             </ul>
          </div>

          <div className="space-y-4">
             <h4 className="font-serif text-lg italic opacity-70">Mobile</h4>
             <ul className="text-sm space-y-2 editorial-text">
               <li>React Native</li>
             </ul>
          </div>

          <div className="space-y-4">
             <h4 className="font-serif text-lg italic opacity-70">Tools</h4>
             <ul className="text-sm space-y-2 editorial-text">
               <li>Git & GitHub</li>
               <li>Figma</li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TechStack
