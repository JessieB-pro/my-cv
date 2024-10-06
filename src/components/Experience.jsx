import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { MDBBadge } from "mdb-react-ui-kit";

export default function Experience() {
  return (
    <>
    <div id="experience" className="container-fluid">
      <div className="heading">
        <h1>Expérience</h1>
      </div>
      <Accordion className='experience'>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h4>Depuis Octobre 2016</h4>
          </Accordion.Header>
          <Accordion.Body>
            <h4 id="styleCompany" className="text-decoration-underline">Université Toulouse III Paul Sabatier</h4>
            <h5>ADJAENES titulaire</h5>
            <div className="d-flex justify-content-center">
              <Stack direction="horizontal" gap={3}>
                <Badge pill bg="info">
                  Gestion financière
                </Badge>
                <Badge pill bg="info">
                  Secrétariat
                </Badge>
              </Stack>
            </div>
            <div className="d-flex justify-content-center flex-wrap mt-3 badge-container">
              <MDBBadge className="text-black mb-0 me-1 border" color="light">
                GESLAB
              </MDBBadge>
              <MDBBadge className="text-black mb-0 me-1 border" color="light">
                SIFAC
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
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h4>2010-2016</h4>
          </Accordion.Header>
          <Accordion.Body>
            <h4 id="styleCompany" className="text-decoration-underline">IUT Paul Sabatier</h4>
            <h5>ADJAENES titulaire</h5>
            <div className="d-flex justify-content-center">
              <Stack direction="horizontal" gap={3}>
                <Badge pill bg="info">
                  Secrétariat
                </Badge>
              </Stack>
            </div>
            <div className="d-flex justify-content-center flex-wrap mt-3 badge-container">
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
                Access
              </MDBBadge>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h4>2010 (8mois)</h4>
          </Accordion.Header>
          <Accordion.Body>
            <h4 id="styleCompany" className="text-decoration-underline">Université Toulouse III Paul Sabatier</h4>
            <h5>Agent administratif contractuel</h5>
            <div className="d-flex justify-content-center">
              <Stack direction="horizontal" gap={3}>
                <Badge pill bg="info">
                  Secrétariat
                </Badge>
              </Stack>
            </div>
            <div className="d-flex justify-content-center flex-wrap mt-3 badge-container">
              <MDBBadge className="text-black mb-0 me-1 border" color="light">
                APOGEE
              </MDBBadge>
              <MDBBadge className="text-black mb-0 me-1 border" color="light">
                Word
              </MDBBadge>
              <MDBBadge className="text-black mb-0 me-1 border" color="light">
                Excel
              </MDBBadge>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h4>Avant 2010</h4>
          </Accordion.Header>
          <Accordion.Body>
            <h4 id="styleCompany">Divers CDD au <u>Rectorat de Toulouse</u> - <u>...</u></h4>
            <h5>Agent administratif contractuel - ...</h5>
            <div className="d-flex justify-content-center">
              <Stack direction="horizontal" gap={3}>
                <Badge pill bg="info">
                  Secrétariat
                </Badge>
              </Stack>
            </div>
            <div className="d-flex justify-content-center flex-wrap mt-3 badge-container">
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
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    </>
  )
}
