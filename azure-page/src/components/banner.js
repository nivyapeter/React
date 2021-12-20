import React from "react";
import Button from "./button";
import Chevron from 'react-chevron'
const bannerLink="https://azure.microsoft.com/en-gb/overview/covid-19/";
const Banner = () => {
    return(
       
            <div className="banner">
                <div className="banner-top">
                    <div className="row column">
                    < a class="banner-top-text" href={bannerLink}>We’re in this together. Explore Azure resources and tools to help you navigate COVID-19
                   <span> <Chevron /></span>
                    </a>
                    </div>
                </div>
                <div className="centerBanner">
                    <div className="column large-8 centerBanner-text">
                       <p class="text-heading1">INVENT WITH PURPOSE</p>
                       <h1>Azure. The cloud for space stations, startups, and everything in between.</h1>
                       <p1>Create next-generation solutions and deploy them anywhere—on or off the planet. Get started with an Azure free account, 12 months of popular services free, and a </p1>
                       <Button  bg="green" title="Try Azure for free" color="black" link="https://azure.microsoft.com/en-gb/free/"/>
                    </div> 
                    
                </div>
                
            </div>
       
    );
}
export default Banner;