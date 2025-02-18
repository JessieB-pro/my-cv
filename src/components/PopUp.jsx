import { useState, useEffect, useRef } from "react";

export default function PopUp() {
  const [show, setShow] = useState(false);
  const [animationClass, setAnimationClass] = useState("jackInTheBox");
  const popupRef = useRef(null);
  const delay = 3.5;
  const expirationTime = 24 * 60 * 60 * 1000;

  useEffect(() => {
    const lastSeenTimestamp = localStorage.getItem("popupLastSeen");
    const now = Date.now();

    if (!lastSeenTimestamp || now - lastSeenTimestamp > expirationTime) {
      const timer = setTimeout(() => {
        setShow(true);
        localStorage.setItem("popupLastSeen", now);

        setTimeout(() => {
          setAnimationClass("heartbeat");
        }, 3000);

      }, delay * 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  return (
    <>
      {show && (
        <div
          id="container-pop-up"
          className="row bg-black bg-opacity-25"
          style={{ zIndex: 1050 }}
        >
          <div
            ref={popupRef}
            id='pop-up'
            className={`col-md-12 m-auto bg-white p-6 animate ${animationClass}`}
          >
            <p className="bubble-title"><u>Bienvenue dans ma bulle</u> !</p>
            <p>Ceci n'est <span className="blue-word">pas qu'une page bleue</span> mais mon <span>CV</span> que j'ai <span>codé avec React</span> en intégrant aussi une partie de mes <span>données</ span> stockées <span>sur Cloud Firestore.</span>
            </p>
            <p>J'ai ensuite <span>déployé</span> mon site sous mon <span>nom de domaine</span> via un <span>repo GitHub</span> et la plateforme <span>Cloudflare.</span>
            </p>
            <p className="small-text">Je suis à la recherche d'<span className="additional-text">opportunités,</span> <span className="additional-text">merci</span> pour votre intérêt !</p>
            <p className="get-out-bubble"><u>Pour naviguer sur mon cv, cliquez en dehors de la bulle ou scrollez vers le bas !</u></p>
          </div>
        </div>
      )}
    </>
  );
}
