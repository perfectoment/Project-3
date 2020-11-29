import React from "react";
import "./style.css";
// import Anime, { anime } from 'anime.js';
import K from "../assets/K1.png";
import I2 from "../assets/I2.png";
import D from "../assets/D3.png";
import Z4 from "../assets/Z4.png";
import Q from "../assets/Q5.png";
import U from "../assets/U6.png";
import I7 from "../assets/I7.png";
import Z8 from "../assets/Z8.png";
function Title() {
    // const play = anime({
    //     targets: 'img.item',
    //     translateY: [
    //         { value: 400, duration: 400, },
    //         { value: 200, duration: 800 }
    //     ],
    //     rotate: {
    //         value: '1turn',
    //         easing: 'easeInOutSine'
    //     },
    //     delay: function (el, i, l) { return i * 1000 },
    //     autoplay: true
    // });
    return (
        <section class="container" id="logobox">
            <div class="row">
                <img className="item div-thumbnail logo1" src={K} alt="K"></img>
                <img className="item div-thumbnail logo2" src={I2} alt="I"></img>
                <img className="item div-thumbnail logo3" src={D} alt="D"></img>
                <img className="item div-thumbnail logo4" src={Z4} alt="Z"></img>
            {/* </div>
            <div class="row"> */}
                <img className="item div-thumbnail logo5" src={Q} alt="Q"></img>
                <img className="item div-thumbnail logo6" src={U} alt="U"></img>
                <img className="item div-thumbnail logo7" src={I7} alt="I"></img>
                <img className="item div-thumbnail logo8" src={Z8} alt="Z"></img>
            </div>
        </section>
    );
}
export default Title;