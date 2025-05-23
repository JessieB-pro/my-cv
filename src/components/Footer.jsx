import linkedin_rounded from '../assets/linkedin_rounded.png';
import print from '../assets/print.png';
import cv_Jessie_BAGNERIS from '../docs/cv_Jessie_BAGNERIS.pdf'

export default function Footer() {
    return (
        <div id='footer'>
            <a href="#">
                <span className="material-icons">expand_less</span>
            </a>
            <div id="details">
                <a href="https://www.linkedin.com/in/jessie-bagneris-pro/" target='_blank'>
                    <img src={linkedin_rounded} alt="icon linkedin" />
                </a>
                <a href={cv_Jessie_BAGNERIS} target='_blank'>
                    <img src={print} alt="icon print" />
                </a>
            </div>
            <h5>Copyright © 2025 CV Jessie Bagnéris - Tous droits réservés.</h5>
        </div>
    )
}
