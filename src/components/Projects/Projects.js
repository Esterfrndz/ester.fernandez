import './Projects.css';
import { motion } from "framer-motion"



const projects = [
   {
      id: 1,
      name: "Web Bar Churrería",
      description: "Web de un negocio hostelero para la información de sus productos y servicios.",
      url:""
    }, 
    {
      id: 2,
      name: "Adopta.me",
      description: "Plataforma dedicada a conectar corazones con nuevas mascotas.",
      url:"https://github.com/Esterfrndz/Adopta.me"
    },{
      id: 3,
      name: "iGame API",
      description: "Obten la información de productos gaming registrados",
      url:"https://github.com/Esterfrndz/igame-api"
    },
    ,
  ];




function Projects({ fadeInUp }){


return(
    <motion.section className="mb-16 Section-container" {...fadeInUp}>
      <h2 className="mb-4 text-2xl font-semibold">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 projects">
      {projects.map((project) => (
          <motion.div 
            key={project.id} 
            className="rounded-lg bg-gray-800 p-6 project-container"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="mb-2 text-xl font-semibold">{project.name}</h3>
            <p className="mb-4 text-gray-400">{project.description}</p>
            
            <a href={project.url} target="_blank" rel="noopener noreferrer">
  <button><b>Ver proyecto</b></button>
</a>
            
          </motion.div>
        ))}
      </div>
    </motion.section>






)



}

export default Projects;