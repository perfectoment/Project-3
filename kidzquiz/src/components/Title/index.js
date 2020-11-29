import React from "react";
import "./style.css";

import Kidz from "../assets/Kidz.png";

function Title() {

    return (
        <section class="container" id="logobox">
            <div class="row">
                <img className="item div-thumbnail logo1" src={Kidz} alt="KQ"></img>
            </div>
        </section>
    );
}
export default Title;