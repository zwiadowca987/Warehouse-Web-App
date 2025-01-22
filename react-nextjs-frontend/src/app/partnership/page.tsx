"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import openartImage9 from "../../../public/partnership/openartImage9.jpg";
import openartImage10 from "../../../public/partnership/openartImage10.jpg";
import openartImage11 from "../../../public/partnership/openartImage11.jpg";
import openartImage12 from "../../../public/partnership/openartImage12.jpg";
import Image from "next/image";

export default function Partnership() {
    return (
        <div className={"container"}>
          <div className={"text-center"}>
            <h1 className={"display-1"}>Nasi Partnerzy</h1>
            <h2 className={"display-3"}>Naszej hurtowni zaufało wielu specjalistów.</h2>
            
            <div id={"carouselExample"} className={"carousel slide"} data-bs-ride="carousel">
              <div className={"carousel-inner"}>
                <div className={"carousel-item active text-center"}>
                  <Image src={openartImage9} alt={"Image9"} className={"d-block mx-auto"} style={{width: "40%", height: "auto"}} />
                  <div className={"carousel-caption d-none d-md-block display-2"}>
                    <h3>HydroProfi</h3>
                  </div>
                </div>
                
                <div className={"carousel-item text-center"}>
                  <Image src={openartImage10} alt={"Image10"} className={"d-block mx-auto"} style={{width: "40%", height: "auto"}} />
                  <div className={"carousel-caption d-none d-md-block display-2"}>
                    <h3>AquaTech Solutions</h3>
                  </div>
                </div>
                
                <div className={"carousel-item text-center"}>
                  <Image src={openartImage11} alt={"Image11"} className={"d-block mx-auto"} style={{width: "40%", height: "auto"}} />
                  <div className={"carousel-caption d-none d-md-block display-2"}>
                    <h3>HydroMaster Polska</h3>
                  </div>
                </div>
                
                <div className={"carousel-item text-center"}>
                  <Image src={openartImage12} alt={"Image12"} className={"d-block mx-auto"} style={{width: "40%", height: "auto"}} />
                  <div className={"carousel-caption d-none d-md-block display-2"}>
                    <h3>Rury i Złączki 24</h3>
                  </div>
                </div>
              </div>
              
              <button className={"btn btn-light carousel-control-prev"} type={"button"} data-bs-target={"#carouselExample"} data-bs-slide={"prev"}>
                <span className={"carousel-control-prev-icon"}></span>
                <span className={"visually-hidden"}>Previous</span>
              </button>
              
              <button className={"btn btn-light carousel-control-next"} type={"button"} data-bs-target={"#carouselExample"} data-bs-slide={"next"}>
                <span className={"carousel-control-next-icon"}></span>
                <span className={"visually-hidden"}>Next</span>
              </button>
            </div>
          </div>
        </div>
    );
}
