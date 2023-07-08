import React from 'react'
import Todo from "./Todo"

export default function Todos(props) {
    let todos=[
        {
          sno:1,
          title:"go to market",
          desc:"go market"
        }
      ]
  return (
    <div className='hello'>
        <h1>hhkgg</h1>
        <h3>hee</h3>
        <Todo todo={props.todos[0]}/>
    </div>
  )
}

