import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import Word from './components/Word'

export default function App() {

  const [inputValue, setInputValue] = useState("")
  const [mainWord, setMainWord] = useState("")
  const [wordArrey, setWordArrey] = useState([])

  const dataArrey = [
    , "Angry", "Badly", "Blame",
    , "Agree", "Apart", "Baker", "Blind"
    , "Ahead", "Apple", "Bases", "Block"
    , "Alarm", "Apply", "Basic", "Blood"
    , "Album", "Arena", "Basis", "Board"
    , "Boost", "Buyer", "China", "Cover"
    , "Booth", "Cable", "Chose", "Craft"
    , "Bound", "Calif", "Civil", "Crash"
    , "Brain", "Carry", "Claim", "Cream"
    , "Brand", "Catch"]


  useEffect(() => {
    setMainWord((dataArrey[Math.floor(Math.random() * dataArrey.length)]).toLocaleUpperCase())
  }, [])

  const submitHandler = event => {
    event.preventDefault()

    if (inputValue.length === 5) {
      setWordArrey(prev => [...prev, inputValue.toLocaleUpperCase()])
    } else {
      Swal.fire("must be 5 character")
    }
    setInputValue("")
    if (inputValue.toLocaleUpperCase() === mainWord) {
      Swal.fire("you win").then(res => {
        if (res) window.location.reload()
      })

    }
    if (wordArrey.length > 4 && inputValue.toLocaleUpperCase() !== mainWord) {
      Swal.fire({
        title: "you lose",
        text: `Answer : ${mainWord}`
      }).then(res => {
        if (res) window.location.reload()
      })

    }

  }

  return (
    <div className='flex justify-center items-center bg-green-200 w-screen h-screen'>
      <div className="bg-slate-50 rounded-lg w-[1000px] h-[600px]  text-center p-5">
        <div className='flex justify-between'>
          <h2 className=' font-medium'>Word Game</h2>
          <div className='font-medium text-sm'>
            <span>Your Chance : </span>
            <span>{6 - wordArrey.length}</span>
          </div>
        </div>
        <div className='mb-12 h-[410px] p-2 m-2 rounded-lg'>
          {wordArrey.map(word => <Word key={word} word={word} mainWord={mainWord} />)}
          <div className='bg-slate-50 p-2 flex w-64 mx-auto justify-center'>
            {wordArrey.length < 6 ? (
              <>
                {inputValue.split("").map((item, i) => (
                  <span key={i}
                    className={`p-2 border m-1 flex justify-center items-center w-10 h-10 rounded-lg `}>
                    {item}
                  </span>
                ))}
                {Array(5 - inputValue.length).fill(0).map((item, i) => (
                  <span key={i}
                    className={`p-2 border m-1 flex justify-center items-center w-10 h-10 rounded-lg `}>
                  </span>
                ))}
              </>) : (<></>)}
          </div>
          {wordArrey.length < 5 ? (
            <>
              {Array(5 - wordArrey.length).fill(0).map((item, i) => (
                <div key={i} className='bg-slate-50 p-2 m-0 flex justify-center w-64 mx-auto'>
                  {Array(5).fill(0).map((item, i) => (
                    <span key={i}
                      className={`p-2 border m-1 flex justify-center items-center w-10 h-10 rounded-lg `}>
                    </span>))}
                </div>
              ))}
            </>) : (<></>)}

        </div>
        <form onSubmit={submitHandler} className='block w-full'>
          <input value={inputValue.toLocaleUpperCase()} onChange={e => {
            setInputValue(prev => {
              return ((e.target.value).toUpperCase()).slice(0, 5)
            })
          }}
            type="text" className='border p-2 rounded-lg mx-auto w-[300px] bg-slate-50' placeholder='Type Here...' />
        </form>
      </div>
    </div>
  )
}

