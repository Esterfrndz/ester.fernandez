
import { motion } from "framer-motion"
import '../Skills/Skills.css';


function Skills({ fadeInUp, stagger }){
const skills = ["Javascript", "React", "Angular","Next.js","Typescript","Python","REST APIs", "Git/Github","Figma"];  
    return(

        <motion.section className="mb-16 skills-container" {...fadeInUp}>
      <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
      <motion.div 
        className="flex flex-wrap gap-2 skills-content "
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {skills.map(skill => (
          <motion.span 
            key={skill} 
            className="rounded-full bg-gray-700 px-3 py-1 text-sm skill-span"
            variants={fadeInUp}
          >
            {skill} 
            
          </motion.span>
        ))}
      </motion.div>
    </motion.section>

    );



}


export default Skills