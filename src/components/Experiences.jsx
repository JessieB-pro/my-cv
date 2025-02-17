import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import { MDBBadge } from "mdb-react-ui-kit";

const experiences = [
  {
    period: "depuis 2010",
    company: "UT3 Paul Sabatier",
    skills: ["GESLAB", "SIFAC", "APOGEE", "Word", "Excel", "PowerPoint", "Access"],
    roles: ["Secrétariat", "Gestion financière"],
    status: "Titulaire",
  },
  {
    period: "2010 et avant",
    company: "UT3 Paul Sabatier, Rectorat de Toulouse",
    skills: ["APOGEE", "PuTTY", "Word", "Excel"],
    roles: ["Secrétariat"],
    status: "CDD",
  },
];

export default function Experiences() {
  return (
    <div id="experiences" className="container-fluid">
      <div className="heading">
        <h1>Expériences</h1>
      </div>
      <div className="container justify-content-center">
        <ul>
          {experiences.map(({ period, company, skills, roles, status }, index) => (
            <li key={index}>
              <h4>{period}</h4>
              <h4 id="corporateStyle">{company}</h4>
              <div className="d-flex justify-content-center flex-wrap mt-3 mb-3 badge-container">
                {skills.map((skill, i) => (
                  <MDBBadge key={i} className="text-black mb-0 me-1 border" color="light">
                    {skill}
                  </MDBBadge>
                ))}
              </div>
              <div className="d-flex justify-content-center mb-2">
                <Stack direction="horizontal" gap={3}>
                  {roles.map((role, i) => (
                    <Badge key={i} pill bg="info">
                      {role}
                    </Badge>
                  ))}
                </Stack>
              </div>
              <h5>{status}</h5>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
