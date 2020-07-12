import React from "react";

export default function Title({title, user}){
    return(
        <h1 className="uk-heading-bullet uk-margin-medium-bottom">
          <span>{title}</span>
          <a className="uk-text-small" href="#">"autor"</a>
        </h1>
    )
}