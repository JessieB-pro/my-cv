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
          <h1 className='my-name animate pulse'>
            <span className="letter1">J</span>
            <span className="letter2">e</span>
            <span className="letter3">s</span>
            <span className="letter4">s</span>
            <span className="letter5">i</span>
            <span className="letter6">e</span>
            <span className="letter7"> </span>
            <span className="letter8">B</span>
            <span className="letter9">a</span>
            <span className="letter10">g</span>
            <span className="letter11">n</span>
            <span className="letter12">é</span>
            <span className="letter13">r</span>
            <span className="letter14">i</span>
            <span className="letter15">s</span>
            </h1>
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
