import React from "react";

export default function Content({content}){
    return (
        <div className="uk-article uk-dropcap uk-margin-large-bottom">
          <p>{content}</p>
        </div>
    )
}