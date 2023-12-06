import React from "react";
import './BlogBlock.css'

let categoryColorTheme = "";

function BlogBlock(props){
    
    let categoryTheme = props.category;
    if ( categoryTheme === "технологии" || categoryTheme === "новости" ) {
        categoryColorTheme = "#4B6BFB";
    } else if ( categoryTheme === "блог" ) {
        categoryColorTheme = "#FF9209"
    }
    
    return (
            <div id="Blog" className="blog__container" style={{
                background: `url(${props.backgroundImage})`,
                backgroundRepeat: "no-repeat",
                maxHeight: "100%",
                backgroundPosition: "center center"
                }}>
                <div className="title__container">
                    <p style={{
                        backgroundColor: `${categoryColorTheme}`
                    }} className="category">{props.category}</p>
                    <a href={props.link} className="title">
                        {props.title}
                    </a>
                    <p className="date">
                        {props.date}
                    </p>
                </div> 
            </div>
    )
}

export default BlogBlock
