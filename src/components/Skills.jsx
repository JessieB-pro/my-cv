import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import techG1 from "../assets/techG1.png";
import techG2 from "../assets/techG2.png";
import techG3 from "../assets/techG3.png";
import techG4 from "../assets/techG4.png";
import techG5 from "../assets/techG5.png";
import techG6 from "../assets/techG6.png";
import techG7 from "../assets/techG7.png";
import techG8 from "../assets/techG8.png";
import techG9 from "../assets/techG9.png";
import techG91 from "../assets/techG91.png";

export default function Skills() {

  const [progress, setProgress] = useState({ frontEnd: 0, backEnd: 0 });

  useEffect(() => {
    let valueFE = 0;
    let valueBE = 0;
    const interval = setInterval(() => {
      valueFE += 2;
      valueBE += 1;
      setProgress({ frontEnd: valueFE, backEnd: valueBE });

      if (valueFE >= 70 && valueBE >= 30) clearInterval(interval);
    }, 30);
  }, []);

  const data = [
    { name: "Front-End et CMS", value: 70, color: "#43cfee" },
    { name: "Back-End", value: 30, color: "#2971ED" },
  ];


  const skills = [
    { img: techG1, text: "La base :", details: ["CSS", "HTML", "JavaScript"] },
    { img: techG2, text: "J'en suis fan :", details: ["REACT"] },
    { img: techG3, text: "Ça facilite bien :", details: ["Bootstrap", "jQuery"] },
    { img: techG4, text: "C'est aussi pratique :", details: ["Npm", "Node.js", "Vite"] },
    { img: techG5, text: "Dans les nuages :", details: ["Cloudflare", "Firebase"] },
    { img: techG6, text: "Mieux qu'Excel :", details: ["MySQL"] },
    { img: techG7, text: "Ma mémoire :", details: ["Git"] },
    { img: techG8, text: "Mieux que Notepad !", details: ["VSCode", "Brackets"] },
    { img: techG9, text: "J'ai aussi testé :", details: ["WordPress", "PHP"] },
    {
      img: techG91,
      text: "+ de détails :",
      details: ["Cliquez ici !"],
      link: "/trainings",
    },
    {
      img: techG91,
      text: "Vous ne trouvez pas votre bonheur... :",
      details: ["Contactez-moi. Je m'adapte rapidement et me formerai rigoureusement à ce que vous recherchez !"],
      link: "/presentation",
    },
  ];

  const boldKeywords = ["CSS", "REACT", "Bootstrap", "Npm", "Cloudflare", "MySQL", "Git", "VSCode", "WordPress", "Cliquez ici !"];

  return (
    <div id="skills" className="container-fluid">
      <div className="heading">
        <h1>Compétences</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="pie-chart-container">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div id="techGroup">
            <ul>
              {skills.map((skill, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: index * 0.9 }}
                  className="animated-li"
                >
                  {skill.link ? (
                    <a href={skill.link} target="_blank" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", padding: "10px 15px", borderRadius: "40px", color: "#5da2db", border: "solid 1px #5da2db", cursor: "pointer" }}>
                      <img src={skill.img} alt={skill.alt} />
                      {skill.text}{" "}
                      {skill.details.map((word, i) => (
                        <span key={i} style={{ marginLeft: "4px" }}>
                          {i > 0 && ", "} {boldKeywords.includes(word) ? <b>{word}</b> : word}
                        </span>
                      ))}
                    </a>
                  ) : (
                    <>
                      <img src={skill.img} alt={skill.alt} />
                      {skill.text}{" "}
                      {skill.details.map((word, i) => (
                        <span key={i}>
                          {i > 0 && ", "} {boldKeywords.includes(word) ? <b>{word}</b> : word}
                        </span>
                      ))}
                    </>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}