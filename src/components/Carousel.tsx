
import img from "../assets/img.png"
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

import "./Carousel.css"

import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

import { useState } from "react"

function Carousel() {
    
    const imgs = [img, img1, img2, img3]

    const [index, setIndex] = useState(0)

    function PrevIndex(){
        setIndex(index => {
            if (index === 0 )
                return imgs.length - 1;
            return index - 1
        })
    }

    function NextIndex(){
        setIndex(index => {
            if (index === imgs.length - 1)
                return 0
            return index + 1
        })
    }

    return (
        <div style={{height: "100%", width: "100%", position: "relative"}}>
            <div style={{height:"100%", width:"100%", display: "flex", overflow: "hidden"}}>
                {imgs.map((url)=> (
                    <img key={url} src={url} className="carousel-img"  style={{translate: `${-100 * index}%`}}/>
                ))}
            </div>
            <button onClick={PrevIndex} className="carousel-btn" style={{left: 0}}><CgChevronLeft /></button>
            <button onClick={NextIndex} className="carousel-btn" style={{right: 0}}><CgChevronRight /></button>
        </div>
    )

}

export default Carousel 