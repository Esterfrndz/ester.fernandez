import '../Projects/Projects.css';
import { motion } from "framer-motion"

const projects = [
   {
      id: 2,
      name: "Adopta.me",
      description: "Web para la adopción de animales y tienda para colaborar."
    }, 
    {
      id: 2,
      name: "Gestor de Parking",
      description: "Permite gestionar las plazas de un aparcamiento"
    },{
      id: 3,
      name: "iGame API",
      description: "Obten la información de productos gaming registrados"
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
            <button><b>Ver proyecto</b></button>
            
          </motion.div>
        ))}
      </div>
    </motion.section>






)



}

export default Projects;