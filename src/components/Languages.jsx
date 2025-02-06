import { ProgressBar } from 'react-bootstrap';

export default function Languages() {

  const progressFrench = 98;
  const progressEnglish = 55;
  const progressSpanish = 20;

  return (
    <>
      <div id="languages" className="container-fluid">
        <div className="heading">
          <h1>Langues</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12 mt-5">
              <h4>Français : <span>Natif</span></h4>
              
              <ProgressBar
                now={progressFrench}
                className="myBar"
                label='C2'
              />
              <h4>Anglais : <span>Intermédiaire</span></h4>
              <ProgressBar
                now={progressEnglish}
                className="myBar"
                label='B1'
              />
              <h4>Espagnol : <span>Débutant</span></h4>
              <ProgressBar
                now={progressSpanish}
                className="myBar"
                label='A1'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
