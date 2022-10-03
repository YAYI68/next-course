import React from 'react'

function UserId(props) {
  return (
    <div>
        <h1>{props.id}</h1>
    </div>
  )
}

export default UserId

export async function getServerSideProps(context){
    const { params } = context;
    const id = params.uid

    return {
        props:{
            id:`UserId - ${id}`
        }
    }
}