import React from 'react'

function Userprofile({username}) {
  return (
    <div>
        <h1>{username}</h1>
    </div>
  )
}

export default Userprofile

export async function getServerSideProps(context){
    const { params, req , res } = context;

    return {
        props:{
            username:"Yayi"
        }
    }

}