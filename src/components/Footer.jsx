import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import phone from '../assets/phone.png';

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

                <div className='detailsEmail'>
                    <img src={email} alt="icon email" />
                    <p>
                        <span 
                        className='blockspam'
                        aria-hidden="true">
                            PLEASE GO AWAY !
                        </span>
                        jessie.bagneris.pro@{/* fgdg;;?,,ddf.sdhfkjyfkfsd)) */}gmail.com
                    </p>
                </div>

                <a href="https://www.linkedin.com/in/jessie-bagneris-29b422330/" target='_blank'>
                    <img src={linkedin} alt="icon linkedin" />
                    jessie-bagneris-29b422330
                </a>

                <div className='detailsPhone'>
                    <img src={phone} alt="icon phone" />
                    <p>
                        +33.6.51.85.93.46
                    </p>
                </div>
            </div>
            <h5>© 2025 CV Jessie BAGNERIS. Tous droits réservés.</h5>
        </div>
    )
}
