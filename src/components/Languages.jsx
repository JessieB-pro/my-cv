import { useEffect, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function Languages() {
  const targetValues = {
    french: 98,
    english: 55,
    spanish: 20
  };

  const [progress, setProgress] = useState({
    french: 0,
    english: 0,
    spanish: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => ({
        french: Math.min(prev.french + 2, targetValues.french),
        english: Math.min(prev.english + 2, targetValues.english),
        spanish: Math.min(prev.spanish + 2, targetValues.spanish)
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="languages" className="container-fluid">
      <div className="heading">
        <h1>Langues</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-sm-12 mt-5">
            <h4>Français : <span>Natif</span></h4>
            <ProgressBar now={progress.french} className="myBar" label="C2" />

            <h4>Anglais : <span>Intermédiaire</span></h4>
            <ProgressBar now={progress.english} className="myBar" label="B1" />

            <h4>Espagnol : <span>Débutant</span></h4>
            <ProgressBar now={progress.spanish} className="myBarEnd" label="A1" />
          </div>
        </div>
      </div>
    </div>
  );
}
