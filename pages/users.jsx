import React from 'react'

function UserList({users}) {
  return (
    <div>
      <h1>List Of Users</h1>
      {
        users.map((user) => (
          <div key={user.id}>
             <p>{user.name}</p>
            <p>{user.email}</p>
          </div>

        ))
      }
    </div>
  )
}

export default UserList


export  async function getStaticProps(){
     const res = await fetch('https://jsonplaceholder.typicode.com/users')
     const data = await res.json()
     if(!res.ok){
        throw new Error('Unable to Fetch Data')
     }
     return {
        props:{
            users:data
        }
     }
}
