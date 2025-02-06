import { ProgressBar } from 'react-bootstrap';
import techG1 from '../assets/techG1.png';
import techG2 from '../assets/techG2.png';
import techG3 from '../assets/techG3.png';
import techG4 from '../assets/techG4.png';
import techG4bis from '../assets/techG4bis.png';
import techG5 from '../assets/techG5.png';
import techG6 from '../assets/techG6.png';
import techG7 from '../assets/techG7.png';
import techG8 from '../assets/techG8.png';

export default function Skills() {

  const progressFrontEnd = 70;
  const progressBackEnd = 30;

  return (
    <>
      <div id="skills" className="container-fluid">
        <div className="heading">
          <h1>Compétences</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12">
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

              <div className="techGroup">
                <ul>
                  <li>
                    <img src={techG1} alt="list check" />
                    La base :
                    <span><b> CSS,</b> HTML, JavaScript</span>
                  </li>

                  <li>
                    <img src={techG2} alt="hand check" />
                    Ça facilite bien :
                    <span><b> Bootstrap v5.3.3,</b> jQuery</span>
                  </li>

                  <li>
                    <img src={techG3} alt="bubble heart" />
                    J'en suis fan :
                    <span><b> REACT v18.3.1 </b>et React Bootstrap/Router Dom/Redux</span>
                  </li>

                  <li>
                    <img src={techG4} alt="bulb" />
                    C'est aussi pratique :
                    <span><b> Npm, </b>Node.js, Vite</span>
                  </li>

                  <li>
                    <img src={techG4bis} alt="sheet excel" />
                    Dans les nuages :
                    <span><b> Cloudflare, </b>Firebase</span>
                  </li>

                  <li>
                    <img src={techG5} alt="sheet excel" />
                    Mieux qu'Excel :
                    <span><b> MySQL</b></span>
                  </li>

                  <li>
                    <img src={techG6} alt="floppy disk" />
                    Ma mémoire :
                    <span><b> Git</b></span>
                  </li>

                  <li>
                    <img src={techG7} alt="notepad" />
                    Mieux que Notepad !
                    <span><b> VSCode, </b>Brackets</span>
                  </li>

                  <li>
                    <img src={techG8} alt="chemistry test" />
                    J'ai aussi testé :
                    <span><b> WordPress, </b>PHP 7</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
