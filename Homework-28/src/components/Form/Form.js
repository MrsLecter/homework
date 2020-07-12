import React from "react";
import { useForm } from "react-hook-form";

export default function Form({setComment}){
    const { register, errors, handleSubmit } = useForm({
        mode: "onBlur"
      });

    

    const onSubmit = (data,e) => {
        console.log(data);
        setComment(data);
        e.target.reset();        
    };
      
    // useEffect(()=>{
    //     localStorage.setItem("dataComments", JSON.stringify(dataComments));
    // }, dataComments);

    return (
        <form action="#" className="uk-comment-form uk-margin-medium-top" onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="uk-fieldset">
                <legend className="uk-legend">Add Comment</legend>
                <div className="uk-margin">
                    <input className="uk-input" ref={register({ required: true, maxLength:20})} name="name"   type="text" placeholder="Name" required />
                    {errors.firstName && <p>Maxlength is 20</p>}
                </div>
                <div className="uk-margin">
                    <input className="uk-input" ref={register({ required: true})} name="email"    type="email" placeholder="Email" required/>
                    {errors.firstName && <p>This is required</p>}
                </div>
                <div className="uk-margin">
                    <textarea className="uk-textarea" ref={register({ required: true})} name="body" rows="5" placeholder="Comment" required/>
                    {errors.firstName && <p>It must benot empty</p>}
                </div>
                <div className="uk-margin">
                    <button className="uk-button uk-button-primary"  type="submit">Post Comment</button>
                </div>
            </fieldset>
        </form>
    )
}