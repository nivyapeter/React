import React from "react";
const title = "Free account";
function Button ({bg,title,color,link}) {
    return(
        <div className="Button">
            <button class="button-section" style={{background:bg,color:color}}>
                <a href={link}>{title}</a>
            </button>
        </div>
    );
}
export default Button;