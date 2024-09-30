import { ProgressBar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
import technosG1 from '../assets/technosG1.png';
import technosG2 from '../assets/technosG2.png';
import technosG3 from '../assets/technosG3.png';
import technosG4 from '../assets/technosG4.png';
import technosG5 from '../assets/technosG5.png';
import technosG6 from '../assets/technosG6.png';
import technosG7 from '../assets/technosG7.png';
import technosG8 from '../assets/technosG8.png';

export default function Competences() {

  const progressFrontEnd = 70;
  const progressBackEnd = 20;

  const progressAdapt = 95;
  const progressTeam = 95;
  const progressOrgan = 95;

  const progressAnglEcrit = 65;
  const progressAnglOral = 60;

  const progressMotiv = 200;

  return (
    <>
      <div id="skills" className="container-fluid">
        <div className="heading">
          <h1>Compétences</h1>
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-auto">
              <div className="headingPlus">
                <h4>Techniques/Technos</h4>
              </div>
              <ProgressBar
                now={progressFrontEnd}
                className="myBarEnd"
                label='Front End'
              />
              <ProgressBar
                now={progressBackEnd}
                className="myBarEnd"
                label='Back End'
              />

              <div className="groupTechnos">
                <ul>
                  <li>
                    <img src={technosG1} alt="list check" />
                    La base : 
                    <span><b> CSS,</b> HTML, JavaScript</span>
                  </li>

                  <li>
                  <img src={technosG2} alt="hand check" />
                    Ça facilite bien : 
                    <span><b> Bootstrap v5.3.3,</b> jQuery</span>
                  </li>

                  <li>
                  <img src={technosG3} alt="bubble heart" />
                    J'en suis fan : 
                    <span><b> REACT v18.3.1 </b>et React Bootstrap/Router Dom/Redux</span>
                  </li>

                  <li>
                  <img src={technosG4} alt="bulb" />
                    C'est aussi pratique : 
                    <span><b> Npm, </b>Node.js, Vite</span>
                  </li>

                  <li>
                  <img src={technosG5} alt="sheet excel" />
                    Mieux qu'Excel : 
                    <span><b> Firebase, </b>MySQL</span>
                  </li>

                  <li>
                  <img src={technosG6} alt="floppy disk" />
                    Ma mémoire : 
                    <span><b> Git</b></span>
                  </li>

                  <li>
                  <img src={technosG7} alt="notepad" />
                    Mieux que Notepad ! 
                    <span><b> VSCode, </b>Brackets</span>
                  </li>

                  <li>
                  <img src={technosG8} alt="chemistry test" />
                    J'ai aussi testé :  
                    <span><b> WordPress, </b>PHP 7</span>
                  </li>
                </ul>
              </div>

              <div className="col-md-auto mt-5">
                <div className="headingPlus">
                  <h4>Transversales</h4>
                </div>
                <ProgressBar
                  now={progressAdapt}
                  className="myBar"
                  label='Adaptation'
                />
                <ProgressBar
                  now={progressTeam}
                  className="myBar"
                  label='Travail en équipe'
                />
                <ProgressBar
                  now={progressOrgan}
                  className="myBar"
                  label='Organisation'
                />
                <div className="headingPlus">
                  <h4>En Langues</h4>
                </div>
                <ProgressBar
                  now={progressAnglEcrit}
                  className="myBar"
                  label='Anglais écrit (B1)'
                />
                <ProgressBar
                  now={progressAnglOral}
                  className="myBar"
                  label='Anglais oral (B1)'
                />
              </div>
              <div className="row justify-content-md-center">
                <div className="col-md-auto">
                  <div className="headingPlus">
                    <h4>Et aussi ...</h4>
                  </div>
                  <div>
                    <ProgressBar
                      now={progressMotiv}
                      className="myBarMotiv"
                      label={
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                          Motivation {progressMotiv}% <FontAwesomeIcon id="iconMotiv" icon={faFaceSmileWink} className='animate heartBeat' style={{ marginLeft: '5px', fontSize: '18px' }} />
                        </span>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
