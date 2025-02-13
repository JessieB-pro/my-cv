import { motion } from 'framer-motion';

export default function Assets() {
  const skills = ["Capacité d'adaptation", "Travail d'équipe", "Rigoureuse"];

  return (
    <div id="assets" className="container-fluid">
      <div className="heading">
        <h1>Atouts</h1>
      </div>
      <div className="ball-container">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bouncing-ball"
            initial={{ x: 0, y: 0 }}
            animate={{
              x: [0, `${Math.random() * 40}vw`, `${Math.random() * -40}vw`, 0],
              y: [0, `${Math.random() * 40}vh`, `${Math.random() * -25}vh`, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 5, 
              ease: "easeInOut",
              repeatDelay: 2, 
              delay: index * 5
            }}
          >
            <span>{skill}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
