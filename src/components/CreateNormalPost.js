import React from 'react'

const CreateNormalPost = () => {
  return (
    <div>
      <input type="text" placeholder='Heading for your Post?'></input>
    <div className="w-24">
      <button>Uplaod Image</button>
    </div>
    <input type="text" placeholder='Explain your Post'></input>
    <button>Generate Post</button>


    </div>
  )
}

export default CreateNormalPost
