import Link from 'next/link'
import React from 'react'

function PostList({posts}) {
  return (
    <div>
      <h1>List of Posts</h1>
      {
        posts.map((post) => (
            
            <div key={post.id}>
                <Link href={ `posts/${post.id}` }>
                <h2>{post.id} {post.title}</h2>
                </Link>
              
            </div>
          
        ))
      }
    </div>
  )
}

export default PostList



export async function getStaticProps(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return {
        props: {
            posts:data 
        }
    }
}
