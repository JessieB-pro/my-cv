import { useEffect, useRef } from "react";
import { MDBBadge, MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

export default function Trainings() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  const highlightKeywords = (text) => {
    const keywords = [
      "cycles de vie", "concepts", "hooks", "actions", "exercices", "projets", "site internet", "bureautique"
    ];
    const regex = new RegExp(`\\b(${keywords.join("|")})\\b`, "gi");
    return text.replace(regex, (match) => `<span class='highlight'>${match.toUpperCase()}</span>`);
  };

  const trainings = [
    {
      colorClass: "gradient-custom",
      organization: "UDEMY",
      title: "React Js pour tous",
      duration: "2024 (5 mois)",
      certificates: [
        "certificat UC-0b1fe9bf-853b-46f1-a81e-8220660dc6b0",
      ],
      details: [
        "CRA, VITE, Webpack, Babel,...",
        "Composants, Cycles de vie, Props, States, Destructuring, Fragment,...",
        "Bootstrap, React Bootstrap/Toastify,...",
        "Concepts : PureComponent, Memo, Portails, Refs, HOC, React Router Dom,...",
        "Hooks : useState, useEffect,...",
        "Firebase, Cloud Firestore, React-Redux",
      ],
      projects: [
        "2 applications",
      ],
      badges: [
        "VSCode",
      ]
    },
    {
      colorClass: "gradient-custom-4",
      organization: "UDEMY",
      title: "Gagner en productivité avec Emmet",
      duration: "2024 (1 jour)",
      certificates: [
        "formation gratuite",
      ],
      details: [
        "Abréviations, Balises, Actions,...",
      ],
      badges: [
        "VSCode",
      ]
    },
    {
      colorClass: "gradient-custom",
      organization: "UDEMY",
      title: "7 Formations CSS",
      duration: "2024 (3 mois)",
      certificates: [
        "5 formations gratuites et 2 avec certificat :",
        "UC-6bea5886-3803-40ec-90cb-ce30fbbe4182", "UC-5c51c1ab-17f4-4ff6-80e9-efd10b048aa9",
      ],
      details: [
        "- 30 exercices en CSS",
        "- Animations CSS en 9 projets",
        "- Faire de belles cartes en CSS",
        "- 12 animations d'icônes Hamburger en CSS",
        "- Animation en perspective en CSS en 3 projets",
        "- Créer des effets de survol",
        "- 10 techniques à connaître en CSS",
      ],
      badges: [
        "VSCode",
      ]
    },
    {
      colorClass: "gradient-custom-4",
      organization: "UDEMY",
      title: "Formation Complète Développeur Web",
      duration: "2021 (6 mois)",
      certificates: [
        "certificat UC-f3e094c1-4b5e-4cf7-bc0d-e8ab43664027",
      ],
      details: [
        "HTML - CSS",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "PHP - MySQL",
        "WordPress",
      ],
      projects: [
        "un site web",
        "un jeu en ligne",
        "une page web",
        "un cv en ligne responsive",
        "un site web dynamique",
        "un blog et un site e-commerce",
      ],
      badges: [
        "Brackets",
      ]
    },
    {
      colorClass: "gradient-custom",
      organization: "UDEMY",
      title: "Créez votre site WordPress de A à Z – Débutants",
      duration: "2020 (1 mois)",
      certificates: [
        "certificat UC-bf5c9c99-48e3-4aaf-8ac1-00120810d660",
      ],
      details: [
        "Création de site internet",
      ],
      projects: [
        "sites portfolio, business, blog, e-commerce",
      ],
      badges: [
        "WordPress",
      ]
    },
    {
      colorClass: "gradient-custom-4",
      organization: "S.E.P.T. Blagnac",
      title: "Assistante Tertiaire",
      duration: "2008 (3 mois)",
      details: [
        "Perfectionnement dans les domaines de :",
        "- la bureautique",
        "- la communication écrite et orale",
        "- l'organisation administrative",
      ],
      badges: [
        "Word",
        "Excel",
        "Power-Point",
      ]
    },
    {
      colorClass: "gradient-custom",
      organization: "LEGTA Auzeville",
      title: "BTSA",
      duration: "2005 (2 ans)",
      details: [
        "Technologies Végétales",
      ],
      badges: [
        "Word",
        "Excel",
      ]
    },
  ];

  return (
    <div id="trainings" className="container-fluid">
      <div className="heading">
        <h1>Formations</h1>
      </div>
      <MDBContainer className="py-5">
        <div className="main-timeline-4 text-white">
          {trainings.map((training, index) => {
            const isSpecial = training.title === "Formation Complète Développeur Web";
            let mixedContent = [];

            if (isSpecial) {
              const maxLength = Math.max(training.details.length, training.projects.length);
              for (let i = 0; i < maxLength; i++) {
                if (i < training.details.length) {
                  mixedContent.push(
                    <p key={`d-${i}`} dangerouslySetInnerHTML={{ __html: highlightKeywords(training.details[i]) }}></p>
                  );
                }
                if (i < training.projects.length) {
                  mixedContent.push(
                    <p key={`p-${i}`} className="projects">
                      <u>Projets en local</u> : {training.projects[i]}
                    </p>
                  );
                }
              }
            }

            return (
              <div
                key={index}
                className={`timeline-4 ${index % 2 === 0 ? "left-4" : "right-4"}`}
              >
                <MDBCard
                  className={`fade-in ${training.colorClass}`}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <MDBCardBody className="p-4">
                    <h4>{training.organization}</h4>
                    <h4 className="text-decoration-underline">{training.title}</h4>
                    <p className="medium text-white-50 mb-2">{training.duration}</p>

                    {training.certificates?.map((certificate, i) => (
                      <p className="small text-white-50 mb-0" key={i}>{certificate}</p>
                    ))}

                    {isSpecial ? (
                      mixedContent
                    ) : (
                      <>
                        {training.details?.map((detail, i) => (
                          <p key={i} dangerouslySetInnerHTML={{ __html: highlightKeywords(detail) }}></p>
                        ))}
                        {training.projects?.map((project, i) => (
                          <p key={i} className="projects">
                            <u>Projets en local</u> : {project}
                          </p>
                        ))}
                      </>
                    )}

                    {training.badges?.map((badge, i) => (
                      <MDBBadge className="text-black mb-0 me-1" color="light" key={i}>
                        {badge}
                      </MDBBadge>
                    ))}
                  </MDBCardBody>
                </MDBCard>
              </div>
            );
          })}
        </div>
      </MDBContainer>
    </div>
  );
}
