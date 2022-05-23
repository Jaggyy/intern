import React, { useState } from 'react'
import sliderimg1 from '../image/sliderimg1.jpg'
import sliderimg2 from '../image/sliderimg2.jpg'
import sliderimg3 from '../image/sliderimg3.jpg'

import { GrNext, GrPrevious } from 'react-icons/gr'
import {
    BsArrowRightCircle, BsArrowLeftCircle
} from 'react-icons/bs'

let i = 0
function Banner() {
    const img = [sliderimg1, sliderimg2 , sliderimg3]
    const [slider, setSlider] = useState(0)

    const transformright = () => {
        if (i < img.length-1) {
            setSlider(slider - 100)
            i++
        } else {
            setSlider(0)
            i=0
        }
    }

    const transformleft = () => {
        if (i===0) {
           setSlider(slider-(img.length-1)*100)
           i=img.length-1
        }
        else{
            setSlider(slider+100)
            i--
        }
    }
    return (
        <div
            style={{
                maxWidth: "100vw",
                height: "80vh",
                overflow: "hidden",
                display: "flex"
            }}>
            <div className="banneroption pre" onClick={transformleft}>
                <BsArrowLeftCircle color='black' fontSize={50} />
            </div>
            <div className="banneroption  next" >
                <BsArrowRightCircle color='black' fontSize={50} 
                    onClick={transformright}/>
            </div>
            {img.map(image => (
                <div className='slider-img'
                    style={{
                        transform: `translateX(${slider}vw)`
                    }}>
                    <img src={image} alt="" width={"85%"}/>
                </div>
            ))}

        </div>
    )
}

export default Banner