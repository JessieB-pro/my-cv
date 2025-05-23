import linkedin from '../assets/linkedin.png';

export default function Contact() {
  return (
    <>
      <div id="contact" className="container-fluid">
        <div className="heading">
          <h1 className='contact-style'>Contactez-moi !</h1>
          <p>Fortement intéressée par <strong>toute opportunité de poste/POEI/PMSMP de</strong> :</p>
          <h2>Développeuse Front-End • Full Stack</h2>

          <p className='specific-style'>Au plaisir d'un(e) :</p>

          <div className="d-flex flex-wrap justify-content-center align-items-center">

          <a href="https://www.linkedin.com/in/jessie-bagneris-pro/" className="button-contact-in" target='_blank'>
            <h5>Message</h5>
            <img src={linkedin} alt="icon linkedin" />
          </a>

          <a href="#contact" className="button-contact-meet">
            <h5>Rencontre</h5>
            <p className='meet-style'>Disponible sur Toulouse et sa périphérie.</p>
          </a>

        </div>

      </div>
    </div >
    </>
  )
}
