import React from "react";
import "./style.css";



function Title() {


anime({
    targets: 'div.item',
    translateY: [
        { value: 400, duration: 400,},
        { value: 200, duration: 800 }
    ],
    rotate:{
        
        value: '1turn',
        easing: 'easeInOutSine'
    },
    delay: function(el, i, l){ return i * 1000},
    autoplay:true
});

    return (


        <section class="container" id="logobox">
            <div class="row">
                <div className="item div-thumbnail logo1" src="assets/K1.png"  alt="K"></div>
                <div className="item div-thumbnail logo2" src="assets/I2.png"  alt="I"></div>
                <div className="item div-thumbnail logo3" src="assets/D3.png"  alt="D"></div>
                <div className="item div-thumbnail logo4" src="assets/Z4.png"  alt="Z"></div>
            </div>
            <div class="row">
                <div className="item div-thumbnail logo5" src="assets/Q5.png"  alt="Q"></div>
                <div className="item div-thumbnail logo6" src="assets/U6.png"  alt="U"></div>
                <div className="item div-thumbnail logo7" src="assets/I7.png"  alt="I"></div>
                <div className="item div-thumbnail logo8" src="assets/Z8.png"  alt="Z"></div>
            </div>
        </section>


    );
}

export default Title;