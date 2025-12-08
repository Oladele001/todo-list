import React from 'react'
import { useState } from 'react'

const Todolist = () => {
    const [Todo, setTodo] = useState([])
    const [Input, setInput] = useState("")

    const handleSubmit = () =>{
        setTodo((Todo) => {
            return Todo.concat({
                text: Input,
                id: Math.floor(Math.random() * 10)
            })
        })

        setInput("")
    } 
    const removeTodo = (id) => setTodo ((Todo) => Todo.filter((t) => t.id != id));
  return (
    <>
    <div className='body'>
        <div className='margin'>
        <input className='write-here' type="text" placeholder='WHAT ARE YOU DOING TODAY' value={Input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleSubmit} className='submit'>SUBMIT</button>
        </div>
        {/* <ol className='list'>
            {Todo.map(({text, id}) => (
                <li className='number' key={id}>
                    <span className='text'>{text}</span>
                    <button className='cancle' onClick={() => removeTodo (id)}> X </button>
                </li>
            ))

            }
        </ol> */}
    </div>
    </>
  )
}

export default Todolist