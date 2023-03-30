import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Post.css'

function Post({ post }) {

    const navigate = useNavigate()
    const handleclick = () => {
        navigate(`/post/${post.id}`, {state:post})
    }


    return (
        <div className="card" onClick={handleclick}>
            <h5><div className="card-header">
                {post.title}
            </div>
            </h5>
            <div className="card-body">
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    )
}

export default Post