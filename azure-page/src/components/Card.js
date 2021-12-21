import React from "react";

function Card({img,title,body,link}) {
    return (
           <div className="card">
                <div className="card-logo">
                    <img src={img} className="card-image"></img>
                </div>
                <div className="card-content">
                    < a href={link}>
                    <h2 className="card-heading">{title}</h2></a>
                    <p class="card-discription">{body}</p>
                </div>
            </div>
        

    );
}
export default Card;