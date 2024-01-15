import React, { useEffect, useState } from 'react'
import './hangman.css'
import Man from './Man';
import Result from './Result';



function Hangman() {
    const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const countries = [
  'argentina',
  'brazil',
  'canada',
  'denmark',
  'egypt',
  'france',
  'germany',
  'india',
  'japan',
  'kenya',
  'mexico',
  'norway',
  'peru',
  'russia',
  'spain',
  'thailand',
  'uganda',
  'vietnam',
  'wales',
  'zimbabwe'
];

const [word,setWord]=useState('');
const [status,setStatus]=useState('');
const [correct,setCorrect]=useState([]);
const [wrong,setWrong]=useState([]);

 const randomWord=()=>setWord(countries[Math.floor(Math.random()*countries.length)].toUpperCase())

 const maskWord=word.split('').map(letter=>correct.includes(letter)?letter:' _ ')

const reset =()=>{
    randomWord()
    setCorrect([])
    setWrong([])
    setStatus('')
}

useEffect(() => {
    
    reset();
  }, []);


const onGuess=letter=>{
  if(word.includes(letter)){
    setCorrect([...correct,letter])
  }else{
    setWrong([...wrong,letter])
  }
}


useEffect(()=>{
if(correct.length && word.split('').every(letter=>correct.includes(letter)))
setStatus('Won 🥳');
},[correct])

useEffect(()=>{
  if(wrong.length===10)
  setStatus('Lost 🥺');
},[wrong])
  return (
    <>
   


<div className='body'>
      <div className='head'>
        <span>H</span><span>A</span><span>N</span><span>G</span><span>M</span><span>A</span><span>N</span>
      </div>
  
      
   
  
     <div className='mask-container'>
     <Man wrong={wrong.length}/>

      <p className='mask'>{maskWord}</p>
     </div>
      
     <div className='btn-container'>
    {alphabets.map((letter, index) => (
      <button key={index} onClick={()=>onGuess(letter)}
      disabled={correct.includes(letter)|| wrong.includes(letter)}>
        {letter}
      </button>
    ))}
  </div>
  <Result status={status} word={word} reset={reset}/>

</div>
    </>
  )
}

export default Hangman