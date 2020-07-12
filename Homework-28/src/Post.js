import React, {useState, useEffect} from "react";
import Header from "./components/Header/Header"
import Title from"./components/Title/Title";
import Content from"./components/Content/Content"
import CommentList from "./components/Comments/CommentList"
import Form from "./components/Form/Form"
import DBDownloader from"./components/DBDownloader/DBDownloader";


function Post() {
    const [content, setContent] = useState("none");
    const [comment, setComment] = useState("");
    let date = DBDownloader(1);

    useEffect(() => {
        date.then(item => setContent(item));
    }, []);
   
    return (
        <main className="uk-main">
            <Header />
            <div className="uk-container">
                <Title title ={content.title} user={content.user} />
                <Content content={content.body} />
                <hr/>
                <h3 className="uk-margin-remove-top">Comments:</h3>
                <CommentList comments={content.comments} comment={comment}/>
             <hr/>
             <Form setComment={setComment}/>
             </div>
        </main>
    )
};

export default Post;