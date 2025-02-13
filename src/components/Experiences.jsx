import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { MDBBadge } from "mdb-react-ui-kit";

export default function Experiences() {
  return (
    <>
      <div id="experiences" className="container-fluid">
        <div className="heading">
          <h1>Expériences</h1>
        </div>
        <div className="container justify-content-center">
          <ul>
            <li>
              <h4>depuis 2010</h4>
              <h4 id="corporateStyle">UT3 Paul Sabatier</h4>
              <div className="d-flex justify-content-center flex-wrap mt-3 mb-3 badge-container">
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  GESLAB
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  SIFAC
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  APOGEE
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  Word
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  Excel
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  PowerPoint
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  Access
                </MDBBadge>
              </div>
              <div className="d-flex justify-content-center mb-2">
                <Stack direction="horizontal" gap={3}>
                  <Badge pill bg="info">
                    Secrétariat
                  </Badge>
                  <Badge pill bg="info">
                    Gestion financière
                  </Badge>
                </Stack>
              </div>
              <h5>Titulaire</h5>
            </li>
            <li>
              <h4>2010 et avant</h4>
              <h4 id="corporateStyle">UT3 Paul Sabatier, Rectorat de Toulouse</h4>
              <div className="d-flex justify-content-center flex-wrap mt-3 mb-3 badge-container">
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  APOGEE
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  PuTTY
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  Word
                </MDBBadge>
                <MDBBadge className="text-black mb-0 me-1 border" color="light">
                  Excel
                </MDBBadge>
              </div>
              <div className="d-flex justify-content-center mb-2">
                <Stack direction="horizontal" gap={3}>
                  <Badge pill bg="info">
                    Secrétariat
                  </Badge>
                </Stack>
              </div>
              <h5>CDD</h5>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
