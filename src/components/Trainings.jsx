import { MDBBadge, MDBCard, MDBCardBody, MDBContainer } from "mdb-react-ui-kit";

export default function Trainings() {
  return (
    <>
      <div id="trainings" className="container-fluid">
        <div className="heading">
          <h1>Formations</h1>
        </div>
        <MDBContainer className="py-5">
          <div className="main-timeline-4 text-white">

            <div className="timeline-4 left-4">
              <MDBCard className="gradient-custom">
                <MDBCardBody className="p-4">
                  <h4>UDEMY (qualifiante)</h4>
                  <h4 className="text-decoration-underline">React Js pour tous</h4>
                  <p className="medium text-white-50 mb-4">2024 (5 mois)</p>
                  <p>CRA, VITE, Webpack, Babel, React Developer Tools,...</p>
                  <p>Composants et leurs cycles de vie, Props, States, Destructuring, Fragment,...</p>
                  <p>Bootstrap, React Bootstrap, React Toastify,...</p>
                  <p>Concepts de React Js : PureComponent, Memo, Portails, Refs, HOC, React Router Dom, React Lazy, React Suspense,...</p>
                  <p>Hooks : useState, useEffect,...</p>
                  <p>Firebase, Cloud Firestore, React-Redux (actions, reducers, store, dispatch,...)</p>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    VSCode
                  </MDBBadge>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline-4 right-4">
              <MDBCard className="gradient-custom-4">
                <MDBCardBody className="p-4">
                  <h4>UDEMY (qualifiante)</h4>
                  <h4 className="text-decoration-underline">Gagner en productivité avec Emmet</h4>
                  <p className="medium text-white-50 mb-4">2024 (1 jour)</p>
                  <p>
                    Abréviations, Balises, Actions,...
                  </p>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    VSCode
                  </MDBBadge>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="timeline-4 left-4">
              <MDBCard className="gradient-custom">
                <MDBCardBody className="p-4">
                  <h4>UDEMY (qualifiantes)</h4>
                  <h4 className="text-decoration-underline">7 Formations CSS</h4>
                  <p className="medium text-white-50 mb-4">entre 2021 et 2024 (3 mois)</p>
                  <p>- 30 exercices en CSS</p>
                  <p>- Animations CSS en 9 projets</p>
                  <p>- Faire de belles cartes en CSS</p>
                  <p>- 12 animations d'icônes Hamburger en CSS</p>
                  <p>- Animation en perspective en CSS en 3 projets</p>
                  <p>- Créer des effets de survol</p>
                  <p>- 10 techniques à connaître en CSS</p>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    VSCode
                  </MDBBadge>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline-4 right-4">
              <MDBCard className="gradient-custom-4">
                <MDBCardBody className="p-4">
                  <h4>UDEMY (qualifiante)</h4>
                  <h4 className="text-decoration-underline">Formation Complète Développeur Web</h4>
                  <p className="medium text-white-50 mb-4">entre 2020 et 2021 (6 mois)</p>
                  <p>HTML et CSS : création d'un site Web</p>
                  <p>Bootstrap : création de CV en ligne</p>
                  <p>jQuery : création d’une page Web interactive</p>
                  <p>JavaScript : création du jeu du serpent</p>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    Brackets
                  </MDBBadge>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="timeline-4 left-4">
              <MDBCard className="gradient-custom">
                <MDBCardBody className="p-4">
                  <h4>UDEMY (qualifiante)</h4>
                  <h4 className="text-decoration-underline">Créez votre site WordPress de A à Z – Débutants</h4>
                  <p className="medium text-white-50 mb-4">2020 (1 mois)</p>
                  <p>Création de différents types de site internet :</p>
                  <p>- portfolio</p>
                  <p>- blog</p>
                  <p>- business</p>
                  <p>- e-commerce</p>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    WordPress
                  </MDBBadge>
                </MDBCardBody>
              </MDBCard>
            </div>
            <div className="timeline-4 right-4">
              <MDBCard className="gradient-custom-4">
                <MDBCardBody className="p-4">
                  <h4>S.E.P.T. Blagnac (qualifiante)</h4>
                  <h4 className="text-decoration-underline">Assistante Tertiaire</h4>
                  <p className="medium text-white-50 mb-4">2008 (3 mois)</p>
                  <p>Perfectionnement dans les domaines de :</p>
                  <p>- la bureautique</p>
                  <p>- la communication écrite et orale</p>
                  <p>- l'organisation administrative</p>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    Word
                  </MDBBadge>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    Excel
                  </MDBBadge>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    Power-Point
                  </MDBBadge>
                </MDBCardBody>
              </MDBCard>
            </div>

            <div className="timeline-4 left-4">
              <MDBCard className="gradient-custom">
                <MDBCardBody className="p-4">
                  <h4>LEGTA Auzeville (diplômante)</h4>
                  <h4 className="text-decoration-underline">BTSA</h4>
                  <p className="medium text-white-50 mb-4">2005 </p>
                  <p>Technologies Végétales</p>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    Word
                  </MDBBadge>
                  <MDBBadge className="text-black mb-0 me-1" color="light">
                    Excel
                  </MDBBadge>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        </MDBContainer>
      </div>
    </>
  );
}
