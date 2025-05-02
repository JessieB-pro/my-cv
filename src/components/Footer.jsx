import linkedin from '../assets/linkedin.png';

export default function Footer() {
    return (
        <div id='footer'>
            <a href="#">
                <span className="material-icons">expand_less</span>
            </a>

            <div id="details" className="animate flash">
                <p className='details'>
                    <u>Me contacter</u> :
                </p>

                <a href="https://www.linkedin.com/in/jessie-bagneris-29b422330/" target='_blank'>
                    <img src={linkedin} alt="icon linkedin" />
                    jessie-bagneris-pro
                </a>

            </div>
            <h5>© 2025 CV Jessie BAGNERIS. Tous droits réservés.</h5>
        </div>
    )
}
