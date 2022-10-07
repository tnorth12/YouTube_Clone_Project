import React, { useState } from "react";
import axios from "axios";

const ReplyForm = (props) => {
    const [user,setUser] = useState('');
    const [comment, setComment] = useState('');
    function handleComment(event) {
        event.preventDefault();

        let newComment = {

            text: comment,
            comment: props.comment.id,
        };
            console.log(props.comment.id);
          console.log(newComment);
          addComment(newComment);

        
        async function addComment(newComment){
            try {
              let response = await axios.post(`http://127.0.0.1:8000/api/comment/${props.comment.id}/`, newComment,{
              headers: {
                  Authorization: "Bearer " + props.token,
              },

            });
            setComment(response.data);
           } catch (error){
              console.log(error.message);
            }
        
        };
    }
    return (
        <form onSubmit={handleComment}>
            <input type='text' value={Comment} onChange={(event)=> setComment(event.target.value)}/>
            <input type="submit" value='Add Comment' />
        </form>
    )

};

export default ReplyForm;