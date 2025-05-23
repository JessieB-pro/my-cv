import background from '../assets/background.jpg';

export default function Homepage() {
  return (
    <>
      <div id="homepage" className="container-fluid position-relative  d-flex justify-content-center align-items-center">
        <img
          src={background}
          alt="background pc"
          className="background-image-pc"
        />
        <div className="text-center z-1">
          <h2 className='homepage-text my-name animate pulse fst-italic mt-2'>Bienvenue ! Je m'appelle
            <span className="letter1"> J</span>
            <span className="letter2">e</span>
            <span className="letter3">s</span>
            <span className="letter4">s</span>
            <span className="letter5">i</span>
            <span className="letter6">e,</span>
          </h2>
          <h1 className='homepage-text fw-bold mt-5'>Développeuse Full Stack</h1>
          <h5 className='homepage-text mt-5'>Je recherche un <strong>poste/POEI/PMSMP</strong> sur <strong>Toulouse et sa périphérie</strong>.
          </h5>
        </div>
      </div>
    </>
  )
}
