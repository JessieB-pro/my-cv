import { Carousel } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './FirebaseConfig';

function TextCarousel() {

    const [centresInteret, setCentresInteret] = useState();

    const getCentresInteret = async () => {
        const querySnapshot = await getDocs(collection(db, "centresInteret"));

        const centresInteret = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        // querySnapshot.forEach((doc) => {
        //     console.log(doc.id, " => ", doc.data());
        // });

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
                <div className="justify-content-center align-items-center">
                    <h4>Oups, mes centres d'intérêt se sont échappés...</h4>
                </div>
            )
            }

            {/* <Carousel.Item interval={8000}>   
                <div id="carousel-item" className="justify-content-center align-items-center">
                    <h3 className='mb-5'>Le Chant et la Guitare pour respirer</h3>
                    <h4 className='mb-5'>"La musique pour moi, c'est comme respirer. Je ne me lasse pas de respirer, je ne me lasse pas de la musique" de Ray Charles</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
                <div id="carousel-item" className="justify-content-center align-items-center">
                    <h3 className='mb-5'>Les Jeux pour réapprendre</h3>
                    <h4 className='mb-5'>"La vie, ce n'est pas d'attendre que les orages passent, c'est d'apprendre à danser sous la pluie" de Sénèque</h4>
                </div>
            </Carousel.Item>
            <Carousel.Item interval={6000}>
                <div id="carousel-item" className="justify-content-center align-items-center">
                    <h3 className='mb-5'>La Lecture pour découvrir</h3>
                    <h4 className='mb-5'>"Explorer de nouveaux endroits est un excellent moyen de se détendre et de se vider l'esprit"  de Holly R. Patrick</h4>
                </div>
            </Carousel.Item> */}
        </Carousel>
    );
}

export default TextCarousel;
