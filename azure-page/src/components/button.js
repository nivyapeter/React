import React from "react";

const link="https://azure.microsoft.com/en-gb/free/";
const title = "Free account";
function Button () {
    return(
        <div className="Button">
            <button class="button-section">
                <a href={link}>{title}</a>
            </button>
        </div>
    );
}
export default Button;