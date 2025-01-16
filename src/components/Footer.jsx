import at from '../assets/at.png';
import linkedin from '../assets/linkedin.png';

export default function Footer() {
    return (
        <div id='footer'>
            <a href="#">
                <span className="material-icons">expand_less</span>
            </a>

            <div id="contacts" className="animate flash">
                <p>
                    <u>Pour me contacter</u> :
                </p>

                <div className='contactEmail'>
                    <img src={at} alt="icon email" />
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
                    www.linkedin.com/in/jessie-bagneris-29b422330
                </a>
            </div>
            <h5>© 2025 CV Jessie BAGNERIS</h5>
        </div>
    )
}
