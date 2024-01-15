import React from 'react'

function Result({status,word,reset}) {

    if(!status){
      return
    }

  return (
    <div className='popup'>

 <p className='sts'>You {status}</p>
 <p>The word is : {word}</p>

<button onClick={reset}>Play again ▶️</button>


    </div>
  )
}

export default Result