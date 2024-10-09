import { motion } from 'framer-motion';
import './Experience.css';

function Experience({ fadeUp, fadeInUp }) {
  const jobs = [
    {
      title: 'Freelance',
      company: 'Snaps',
      period: '2024',
      description:
        'Desarrollo y automatización de procesos mediante programación en JavaScript y Python, integrando inteligencia artificial y consumo eficiente de APIs para optimizar tareas.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Snaps',
      period: '2023-2024',
      description:
        'Investigación y desarrollo de proyectos de moda utilizando IA generativa (IAG), con experiencia en sistemas de inteligencia artificial, uso de Python para la resolución de problemas.',
    },
  ];

  const studies = [
    {
      title: 'Master Profesional en Desarrollo de Aplicaciones Multiplataforma',
      company: 'MasterD',
      period: '2023 - 2024',
      description:
        'Javascript, Frameworks, PHP, MySQL, Flutter, Android Studio, Swift, Marketing Digital ',
    },
    {
      title: 'Grado Superior Desarrollo de Aplicaciones Web',
      company: 'MasterD',
      period: '2021 - 2023',
      description: 'HTML, CSS, Javascript, MySQL, PHP, Frameworks   ',
    },
  ];

  const certificates = [
    {
      title: 'Angular con Typescript',
      company: 'CertiDev',
      period: '2024',
      description:
        'Angular, Typescript, Bootstrap, Responsive Design',
    },{
      title: 'Javascript',
      company: 'CertiDevs',
      period: '2024',
      description:
        "Javascript, Ajax, Node.js",
    },{
      title: 'Python',
      company: 'CertiDevs',
      period: '2024',
      description:
        "Python, POO",
    },
    {
      title: 'Git',
      company: 'CertiDevs',
      period: '2024',
      description: 'Git, Github',
    },
    
    
  ];

  return (
    <motion.section className="mb-16 Experience-container" {...fadeInUp}>
      <h2 className="mb-4 text-2xl font-semibold ">Experiencia</h2>

      <div className="space-y-8 exp-cards">
        <h3>
          <i>Experiencia laboral</i>
        </h3>
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="rounded-lg bg-gray-800 p-6 card-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{job.title}</h3>
            <p className="text-gray-400">
              {job.company} | {job.period}
            </p>
            <p className="mt-2 text-gray-300">{job.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-8 exp-cards">
        <h3>
          <i>Formación</i>
        </h3>
        {studies.map((studies, index) => (
          <motion.div
            key={index}
            className="rounded-lg bg-gray-800 p-6 card-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{studies.title}</h3>
            <p className="text-gray-400">
              {studies.company} | {studies.period}
            </p>
            <p className="mt-2 text-gray-300">{studies.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="space-y-8 exp-cards">
        <h3>
          <i>Certificados</i>
        </h3>
        {certificates.map((certificates, index) => (
          <motion.div
            key={index}
            className="rounded-lg bg-gray-800 p-6 card-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold">{certificates.title}</h3>
            <p className="text-gray-400">
              {certificates.company} | {certificates.period}
            </p>
            <p className="mt-2 text-gray-300">{certificates.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Experience;
