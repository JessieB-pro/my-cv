import jb_20240319 from '../assets/jb_20240319.jpg'
import cv_Jessie_BAGNERIS from '../docs/cv_Jessie_BAGNERIS.pdf'

export default function Presentation() {
  return (
    <>
        <div id="presentation" className="container-fluid">
            <div className="col-xs-8 col-md-4 profile-picture">
                <img src={jb_20240319} className="rounded-circle" alt="Photo Jessie" />
            </div>
            <div className="heading">
                <h1>Bonjour,</h1>
                <h1 className='animate pulse'>Jessie Bagnéris</h1>
                <h2>Après une première vie professionnelle bien remplie, c'est avec <span>passion</span> que je suis devenue :</h2>
                <h3 className="animate flipInX">Développeuse Web Front End</h3>
                <h2>débutante, <span>prête</span> à coder et <span>motivée</span> parce que dans ce métier, on ne cesse jamais vraiment <span>d'apprendre</span> !</h2>
                <a href={cv_Jessie_BAGNERIS} className="button1" target="_blank">Télécharger mon CV</a>
            </div>
        </div> 
    </>    
  )
}
