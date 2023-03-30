import React from 'react'
import Post from '../../components/navbar/post/Post'
import { Usefetch } from '../../hooks/Usefetch'
import './Home.css'

function Home() {

  const {posts, error} = Usefetch('https:jsonplaceholder.typicode.com/posts')
    

  return (<div className='container'>
        {
            posts && posts.map((post) => {
                return <Post post={post} key={post.id}/>
            })
        }
        {
            error && <h3>{error}</h3>
        }
    </div>)
}

export default Home