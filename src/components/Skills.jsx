import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
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
import techG92 from "../assets/techG92.png";

export default function Skills() {

  const [animatedData, setAnimatedData] = useState([
    { name: "Front-End/CMS/Git", value: 0, fill: "#b325d7" },
    { name: "Back-End", value: 0, fill: "#5b93f5" },
    { name: "IDE/Hébergement/IA/...", value: 0, fill: "#20e791" }
  ]);

  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setAnimatedData([
        { name: "Front-End/CMS/Git", value: Math.min(progress * 0.60, 60), fill: "#b325d7" },
        { name: "Back-End", value: Math.min(progress * 0.20, 20), fill: "#5b93f5" },
        { name: "IDE/Hébergement/IA/...", value: Math.min(progress * 0.20, 20), fill: "#20e791" }
      ]);

      if (progress >= 100) {
        clearInterval(interval);}
    }, 30);
  }, []);

  const skills = [
    { img: techG1, text: "La base :", details: ["CSS", "HTML", "JS"] },
    { img: techG2, text: "J'en suis fan :", details: ["REACT"] },
    { img: techG3, text: "Ça facilite bien :", details: ["Bootstrap", "TS", "jQuery"] },
    { img: techG4, text: "C'est aussi pratique :", details: ["Npm", "Node.js", "Vite"] },
    { img: techG5, text: "Dans les nuages :", details: ["Cloudflare", "Firebase"] },
    { img: techG6, text: "Mieux qu'Excel :", details: ["Cloud Firestore", "MySQL"] },
    { img: techG7, text: "Ma mémoire :", details: ["Git"] },
    { img: techG92, text: "On est en 2025 !", details: ["ChatGPT", "Gemini"] },
    { img: techG8, text: "Mieux que Notepad !", details: ["VSCode", "Brackets"] },
    { img: techG9, text: "J'ai aussi testé :", details: ["Python", "WordPress", "PHP"] },
    {
      img: techG91,
      text: "+ de détails :",
      details: ["Cliquez ici !"],
      link: "#trainings",
    },
    {
      img: techG91,
      text: "Il manque une compétence ?",
      details: ["Contactez-moi. Je suis un peu comme une API : prête à évoluer et à intégrer de nouvelles compétences !"],
      link: "#contact",
    },
  ];

  const boldKeywords = ["CSS", "REACT", "Bootstrap", "Npm", "Cloudflare", "Cloud Firestore", "Git", "ChatGPT", "VSCode", "Python", "Cliquez ici !"];

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
                  data={animatedData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                >
                  {animatedData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div id="techGroup">
            <ul>
              {skills.map((skill, index) => (
                <li
                  key={index}
                >
                  {skill.link ? (
                    <a
                    href={skill.link}
                    style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", padding: "10px 15px", borderRadius: "50px", cursor: "pointer" }}
                    >
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}