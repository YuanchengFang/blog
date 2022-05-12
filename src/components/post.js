import React from "react"

const SinglePost = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

const Post = () => {
    const postContent = [
    {
        title:"11111",
        content:"111111"
    }, 
    {
        title:"222222",
        content:"333333"
    }
    ];
    return (
        <div>
            {
                postContent.map(
                    (post) => (<SinglePost title={post.title} content={post.content}></SinglePost>)
                )
            }
        </div>
    )
};

export default Post