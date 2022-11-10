import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import { sliderItems } from './cars';
import { FcNext } from 'react-icons/fc';
import "react-alice-carousel/lib/alice-carousel.css";


function Mobile() {
    return (
            
                <div className='slider_container'>
                <AliceCarousel autoPlay autoPlayInterval={2000}>
                {sliderItems.map((item) => (
                    
                    <div className='slider'>
                        <h3 className='bodytype'>{item.bodyType}</h3>
                        <div className='textContainer'>
                            <h2 className='modelname'>{item.modelName}</h2>
                            <p>{item.modelType}</p>
                        </div>
                        <div className='imageContainer'>
                            <img className='image' src={item.imageUrl} alt="image1" />
                        </div>
                        <div className='bottomMenu'>
                            <div className='button'>LEARN< FcNext /></div>
                            <div className='button'>SHOP< FcNext /></div>
                        </div>
                    </div>
                    
                ))}
                </AliceCarousel>
                
                </div>

    )
}

export default Mobile