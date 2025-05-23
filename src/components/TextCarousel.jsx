import { Carousel } from 'react-bootstrap';

import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './FirebaseConfig';

function TextCarousel() {

    const [hobbies, setHobbies] = useState();

    const getHobbies = async () => {
        const querySnapshot = await getDocs(collection(db, "hobbies"));

        const hobbies = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))

        setHobbies(hobbies)
    }

    useEffect(() => {
        getHobbies()
    }, []);

    return (
        <Carousel id="myCarouselHobbies">
            {hobbies ? (
                hobbies.map((hobbies, i) => (
                    <Carousel.Item interval={3000}>
                        <div id="carousel-item-hobbies" className="justify-content-center align-items-center" key={hobbies.id}>
                            <h3>{hobbies.title}</h3>
                            <h4>{hobbies.quote}</h4>
                            <h5>{hobbies.author}</h5>
                        </div>
                    </Carousel.Item>
                ))
            ) : (
                <Carousel.Item>
                <div mt-3 className="justify-content-center align-items-center">
                    <h3 className='m-5'>Chargement en cours...</h3>
                </div>
                </Carousel.Item>
            )
            }
        </Carousel>
    );
}

export default TextCarousel;
