import React from "react";

export default async function DBDownloader(page){
    const url = new URL('https://jsonplaceholder.typicode.com');
    let id = 1;
    let relativeId ="/posts/" + page;
    //console.log("downloader");
    let newUrl = new URL(relativeId, url);
    newUrl.searchParams.set("_embed", "comments");
    newUrl.searchParams.set("_expand" , "user");
    //console.log(newUrl); 
    let promise = await fetch(newUrl);
    const data = await promise.json()
    return data;
};

