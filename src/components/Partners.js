import React from 'react'
import { StaticImage } from "gatsby-plugin-image"




function Partners() {
    return (
        <div className="mb-2">
 
            {/* Marketing partners */}
            <div className="d-flex row justify-content-center align-items-center" > 
                <StaticImage 
                    className="d-flex col-3 col-lg-3 col-xl-2 justify-content-center "
                    src="../images/airbnblogo.png"
                    alt="airbnb logo"
                    height={150}
                    />
                <StaticImage 
                    className="d-flex col-3 col-lg-3 col-xl-2 justify-content-center "
                    src="../images/vrbologo.png" 
                    alt="Vrbo logo"
                    height={150}
                    />
                <StaticImage 
                    className="d-flex col-3 col-lg-3 col-xl-2 justify-content-center"
                    src="../images/bookinglogo.png"
                    alt="booking.com logo"
                    height={150}
                />
                <StaticImage 
                    className="d-flex col-3 col-lg-3 col-xl-2 justify-content-center"
                    src="../images/tripadvisor.png" 
                    alt="trip advisor logo"
                    height={150}
                />
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/augustLogo.png" 
                    alt="august branding logo"
                    height={150}
                />
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/turnoverbnb.png" 
                    alt="Turnover Bnb logo"
                    height={150}
                />  
                    
            </div>


            {/* Tech Partners */}
            <div className="d-flex row no-gutters justify-content-center align-items-center pb-3" > 
                
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/properinsurance.png" 
                    alt="proper insurance logo"
                    height={150}
                />
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/noiseaware.png"
                    alt="noice aware logo"
                    height={150}
                />
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/airdna.png"
                    alt="air DNA logo"
                    height={150}
                />
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/smartbnb.png" 
                    alt="smart bnb logo"
                    height={150}
                /> 
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/pricelabs.png" 
                    alt="price labs logo"
                    height={150}
                /> 
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/Ring_logo.png" 
                    alt="ring logo"
                    height={150}
                /> 
                <StaticImage 
                    className="d-flex col-5 col-lg-5 col-xl-2 justify-content-center"
                    src="../images/GoogleHome_logo.png" 
                    alt="Google Home logo"
                    height={150}
                /> 
            </div>
        </div>
    )
}

export default Partners
