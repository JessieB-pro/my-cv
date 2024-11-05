import { Carousel } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './FirebaseConfig';

function TextCarousel() {

    const [centresInteret, setCentresInteret] = useState();

    const getCentresInteret = async () => {
        const querySnapshot = await getDocs(collection(db, "centresInteret"));

        const centresInteret = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        setCentresInteret(centresInteret)
    }

    useEffect(() => {
        getCentresInteret()
    }, []);

    return (
        <Carousel id="myCarousel">
            {centresInteret ? (
                centresInteret.map((centreInteret, i) => (
                    <Carousel.Item interval={8000}>
                        <div id="carousel-item" className="justify-content-center align-items-center" key={centreInteret.id}>
                            <h3 className='mb-5'>{centreInteret.title}</h3>
                            <h4 className='mb-5'>{centreInteret.citation}</h4>
                        </div>
                    </Carousel.Item>
                ))
            ) : (
                <Carousel.Item interval={8000}>
                <div mt-3 className="justify-content-center align-items-center">
                    <h4>Oups, mes centres d'intérêt se sont échappés...</h4>
                </div>
                </Carousel.Item>
            )
            }
        </Carousel>
    );
}

export default TextCarousel;
