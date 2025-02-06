import { ProgressBar } from 'react-bootstrap';

export default function Assets() {

  const progressAdapt = 95;
  const progressTeam = 95;
  const progressOrgan = 95;

  return (
    <>
      <div id="assets" className="container-fluid">
        <div className="heading">
          <h1>Atouts</h1>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-sm-12 mt-5">
              <ProgressBar
                now={progressAdapt}
                className="myBar"
                label="Capacité d'adaptation"
              />
              <ProgressBar
                now={progressTeam}
                className="myBar"
                label='Rigoureuse'
              />
              <ProgressBar
                now={progressOrgan}
                className="myBar"
                label="Travail d'équipe"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
