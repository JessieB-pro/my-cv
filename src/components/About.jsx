import { useState, useEffect } from 'react';
import jb_manga from '../assets/jb_manga.png';
import jb_250428 from '../assets/jb_250428.png';
import cv_Jessie_BAGNERIS from '../docs/cv_Jessie_BAGNERIS.pdf';

const images = [jb_manga, jb_250428];

export default function About() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div id="about" className="container-fluid">
        <div className="col-xs-8 col-md-4 profile-picture">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index}`}
              className={`image img-rounded-oval ${index === currentIndex ? 'visible' : 'hidden'}`}
            />
          ))}
        </div>

        <div className="about-text">

          <h1>A propos de moi</h1>

          <p className='about-style-p'><strong>Nom :</strong> Jessie Bagnéris</p>

          <p className='about-style-p'><strong>Ville : </strong>Castanet Tolosan (31)</p>

          <p>Attirée par le <strong>développement web</strong>, je me suis lancée par choix dans une transition professionnelle de la bureautique à la créativité pour m'épanouir davantage. C'est avec <strong>challenge, motivation et volonté</strong> que mon parcours se poursuit en tant que Développeuse full stack.</p>

          <p>A titre d'exemple, vous naviguez sur mon <strong>CV</strong> que j'ai codé avec la technologie <strong>React</strong> en intégrant aussi une partie de mes <strong>données stockées  sur Cloud Firestore</strong>.</p>

          <p>J'ai ensuite  déployé mon site sous mon  <strong>nom de domaine</strong>   via un  <strong>repo GitHub</strong>   et la plateforme  <strong>Cloudflare</strong>.</p>
          <p>Prête à coder et <strong>curieuse</strong> parce que dans ce métier, on ne cesse jamais d'apprendre !</p>

          <p>Je suis à la <strong>recherche d'opportunités</strong> pour acquérir de l'expérience, un réseau, davantage de compétences et avant tout pour vous aider dans vos projets.</p>

          <p><strong>Merci</strong> pour votre intérêt et votre visite !</p>

          <p>Contactez-moi, je me ferai un <strong>plaisir de vous répondre</strong>.</p>

          <a
            href="#contact"
            className="button-about"
            onMouseUp={(e) => e.currentTarget.blur()}
          >
            ME CONTACTER
          </a>
          <a
            href={cv_Jessie_BAGNERIS}
            className="button-about mb-5"
            target="_blank"
            onMouseUp={(e) => e.currentTarget.blur()}
          >Télécharger mon CV</a>
        </div>
      </div>
    </>
  )
}
