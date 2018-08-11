import React, { PureComponent } from "react";
import "./ImageOverlay.css";

const IMAGE_SRC_ARRAY = [
    { src: "../../img/BassetHounds.jpg", alt: "Basset Hounds" },
    { src: "../../img/BatAndBall.jpg", alt: "Bat and Ball" },
    { src: "../../img/BenderMasteringStudio.jpg", alt: "Bender" },
    { src: "../../img/Coexist.jpg", alt: "Coexist" },
    { src: "../../img/Interactive.jpg", alt: "Interactive" },
    { src: "../../img/LucidDreaming.jpg", alt: "Lucid Dreaming" },
    { src: "../../img/PHUZZ.jpg", alt: "PHUZZ" },
    { src: "../../img/RoachesWatchTV.jpg", alt: "Roaches Watch TV" },
    { src: "../../img/secret7.png", alt: "Secret 7" },
    { src: "../../img/Vitor.jpg", alt: "Vitor" },
];

const WIDTH_AND_POSITION = [
    { width: "10%", top: 200, left: "5%" },
    { width: "20%", top: 400, left: "12.5%" },
    { width: "17.5%", top: 600, left: "25%" },
    { width: "40%", top: 900, left: "0%" },
    { width: "50%", top: 1300, left: "1.5%" },
    { width: "40%", top: 1100, left: "60%" },
    { width: "32.5%", top: 700, left: "55%" },
    { width: "20%", top: 1800, left: "17.5%" },
    { width: "30%", top: 2000, left: "65.5%" },
    { width: "30.5%", top: 300, left: "42.5%" },
];

class ImageOverlay extends PureComponent {
    constructor(props) {
        super(props);

        const images = IMAGE_SRC_ARRAY.map(({ src, alt }, i) => {
            const idx = Math.floor(Math.random() * WIDTH_AND_POSITION.length);

            const { left, top, width } = WIDTH_AND_POSITION[idx];

            WIDTH_AND_POSITION.splice(idx, 1);

            return (
                <img
                    className="random-image"
                    key={i}
                    src={src}
                    alt={alt}
                    style={{
                        top,
                        left,
                        width,
                    }}
                />
            );
        });

        this.state = {
            images,
        };
    }

    render() {
        const { images } = this.state;
        return <section className="overlay">{images.slice(0, 5)}</section>;
    }
}

export default ImageOverlay;
