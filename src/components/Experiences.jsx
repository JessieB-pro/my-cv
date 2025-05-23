import { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import { MDBBadge } from "mdb-react-ui-kit";
import { FaPause, FaPlay } from 'react-icons/fa';

const experiences = [
  {
    period: "Avril 2025",
    company: "Viveris",
    roles: ["Immersion professionnelle PMSMP"],
    skills: ["Git", "Process", "React", "Python"],
    description: ["Dans le cadre de ma transition professionnelle, j’ai effectué une semaine d’immersion au sein de Viveris où j’ai pu voir les différents métiers de l’informatique et leurs process en entreprise"],
  },
  {
    period: "Septembre 2023 - Janvier 2025",
    company: "Transition professionnelle",
    roles: ["Projet personnel"],
    skills: ["IT - Divers langages, technos, etc"],
    description: ["Autoformation continue avec mise en pratique via des projets, exercices, etc", "Développement et déploiement de mon site internet"],
  },
  {
    period: "Février 2008 - Septembre 2023",
    company: "Université de Toulouse, Rectorat de Toulouse",
    roles: ["Secrétariat", "Gestion financière"],
    skills: ["Pack Office", "Apogee", "Sifac", "Geslab", "PuTTY"],
    description: ["Administratif : gestion et suivi de dossiers, etc", "Financier : dépenses, actions sociales, etc"],
  },
];

export default function Experiences() {

  const [paused, setPaused] = useState(false);
  
  const [index, setIndex] = useState(0);

  useEffect(() => {
  if (paused) return;

  const interval = setInterval(() => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? experiences.length - 1 : prevIndex - 1
    );
  }, 2000);

  return () => clearInterval(interval);
}, [paused, experiences.length]);

  return (
    <div id="experiences" className="container-fluid">
      <div className="heading">
        <h1>Expériences</h1>
      </div>
      <Carousel
        className="round-carousel container"
        controls={false}
        indicators={false}
        activeIndex={index}
      >
        {experiences.map(({ period, company, skills, roles, description }, index) => (
          <Carousel.Item
            key={index}
            className="carousel-item-custom">
            <motion.div
              key={index}
              className="d-flex justify-content-center align-items-center w-100 h-100"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              <ul className="text-center p-0 m-0 list-unstyled">
                <li key={index}>
                  <h4 className="period-style">{period}</h4>
                  <h4 className="corporate-style">{company}</h4>
                  <div className="d-flex justify-content-center mb-0">
                    <Stack direction="horizontal" gap={1}>
                      {roles.map((role, i) => (
                        <Badge key={i} pill bg="info" className='badge-color'>
                          {role}
                        </Badge>
                      ))}
                    </Stack>
                  </div>
                  <div className="d-flex justify-content-center flex-wrap mt-3 mb-3 badge-container">
                    {skills.map((skill, i) => (
                      <MDBBadge key={i} className="text-black mb-0 me-1 border" color="light">
                        {skill}
                      </MDBBadge>
                    ))}
                  </div>
                  {description.map((description, i) => (
                  <p key={i}>{description}</p>
                  ))}
                </li>
              </ul>
            </motion.div>
          </Carousel.Item>
        ))}
      </Carousel>
      <button
        onClick={() => setPaused(prev => !prev)}
        className="btn btn-light mt-3"
      >
        {paused ? <FaPlay /> : <FaPause />}
      </button>
    </div >
  )
}
