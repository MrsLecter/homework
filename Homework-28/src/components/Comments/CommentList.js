import React, {useEffect, useState} from "react";
import CommentItem from "./CommentItem/CommentItem";


export default function CommentList({comments, comment}){
    //const [lastComment, setLastComment] = useState("");
    let data = [] ;
    let oldData = null;
    
    // if(arr.length>1){
    //     setLastComment(arr[arr.length-1]);
    //     arr = [];
    // }
    //let storageLength = localStorage.length;
    
    if(comments){
        data = Array(comments)[0];
        if(localStorage.length!=0){
        const raw = localStorage.getItem("comment") || [];
        data.push(JSON.parse(raw));
        
            localStorage.removeItem("comment");
        }
    }

    if(comment){
        data.push(comment);
        localStorage.setItem("comment", JSON.stringify(comment));
    }

  

   let array = [];
    for(let i = 0; i < data.length; i++){
        array.push(i);
    }

    
    return (
        (<div className="uk-comments">
            {array.map(item => <><CommentItem autor={data[item].name} email={data[item].email} content={data[item].body} key={data[item].id}/><hr/></>)}
        </div>)
      
    )
}