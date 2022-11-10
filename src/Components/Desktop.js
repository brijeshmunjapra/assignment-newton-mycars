import React from 'react';
import { sliderItems } from './cars';
import styled from 'styled-components';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FcNext } from 'react-icons/fc';

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.8s ease;
transform: translateX(${(props) => props.slideindex * -100}vw);
`

function Desktop() {

    const [slideindex, setSlideindex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideindex(slideindex > 0 ? slideindex - 1 : 1);
        } else {
            setSlideindex(slideindex < 1 ? slideindex + 1 : 0);
        }
    }

    return (
        <div>
            <div className="slider_container">
                <Wrapper slideindex={slideindex}>
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
                </Wrapper>
            </div>

            <div className='arrowContainer'>
                <div className='arrow' onClick={() => (handleClick("left"))}>
                    <FaChevronLeft className='arrowicon' />
                </div>

                <div className='arrow' onClick={() => (handleClick("right"))}>
                    <FaChevronRight className='arrowicon' />
                </div>
            </div>
        </div>
    )
}

export default Desktop