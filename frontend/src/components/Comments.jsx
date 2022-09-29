
import React from 'react';

const Comments = ({comments, postReply, getVideo}) => {

    return (
        <ul className="ul">
            {comments.map((comment, index) => {
            return(
            <li key={index}>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={getVideo(comment._id)}
                frameborder="0"></iframe><br></br> 
                 {comment._id} 
                Username: {comment.userName}<br></br>
                  {comment.commentText}<br></br>   
                Likes: {comment.like}&nbsp;&nbsp; 
                Dislikes: {comment.dislike} 
                &nbsp;&nbsp;<button onClick = {() => postReply(comment._id)}>Reply</button>
                <ul>
                    {comment.replies.map((reply, index) => <li key={index}>{reply.replyText}</li>)}
                </ul>
                <br></br>
            </li>
            )
        })}    
        </ul>
    )
}

export default Comments;