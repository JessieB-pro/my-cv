import PopUp from './PopUp';
import jb_20240319 from '../assets/jb_20240319.jpg'
import cv_Jessie_BAGNERIS from '../docs/cv_Jessie_BAGNERIS.pdf'

export default function Presentation() {
  return (
    <>
      <PopUp />
      <div id="presentation" className="container-fluid">
        <div className="col-xs-8 col-md-4 profile-picture">
          <img src={jb_20240319} className="rounded-circle" alt="Photo Jessie" />
        </div>
        <div className="heading">
          <h1>Bonjour,</h1>
          <h1 className='animate pulse'>Jessie Bagnéris</h1>
          <h2>De la bureautique à la <span>créativité</span>, j'ai codé ma nouvelle carrière en tant que :</h2>
          <h3 className="animate flipInX">Développeuse Front-End</h3>
          <h2>Je recherche un poste/POEI/PMSMP.
            <br /><br />
            <span>Prête</span> à coder, <span>curieuse</span> et <span>motivée</span> parce que dans ce métier, on ne cesse jamais vraiment <span>d'apprendre</span> !
            <br /><br />
            <italic>Découvrez davantage ce que je pourrais vous apporter lors d'une <span>rencontre</span>.</italic>
          </h2>
          <a href={cv_Jessie_BAGNERIS} className="button1" target="_blank">Télécharger mon CV</a>
        </div>
      </div>
    </>
  )
}
