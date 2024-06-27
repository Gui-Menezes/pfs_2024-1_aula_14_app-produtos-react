import { useState } from "react"

export default function Carrossel() {
    const [slideIndex, setSlideIndex] = useState(0);
    const images = ["Home_Desk-frontline.jpg", "Home_Desk_Kaminha.jpg"];

    const plusDiv = (n) => {
        let index = slideIndex + n;
        if(index >= images.length) {index = 0}
        if(index < 0) {index = images.length}
        setSlideIndex(index);
    }

    const showDiv = (index) => {
        setSlideIndex(index);
    }

    return (
        <div className="w3-content w3-display-container" style={{ maxWidth: '1200px' }}>
            {images.map((image, index) => 
			<img key={index} className="mySlides" src={image} style={{width: "100%", display: slideIndex==index ? 'block' : 'none'}}/>
            )}

            <div className="w3-center w3-container w3-section w3-large w3-text-white w3-display-bottommiddle" style={{ width: "100%" }}>
                <div className="w3-left w3-hover-text-khaki" onClick={() => plusDiv(-1)}>&#10094;</div>
                <div className="w3-right w3-hover-text-khaki" onClick={() => plusDiv(1)}>&#10095;</div>

            {images.map((image, index) => 
                <span className="w3-badge demo w3-border w3-transparent w3-hover-white" onClick={() => showDiv(index)}></span>
            )}
            </div>
        </div>
    )
}