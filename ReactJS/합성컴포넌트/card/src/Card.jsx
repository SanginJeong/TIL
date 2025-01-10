import React from 'react'
import './Card.css';
export const Card = ({children}) => {
  return (
    <div className="card">{children}</div>
  )
}

Card.header = ({children}) => {
  return <div className="card-header">{children}</div>
}

Card.image = ({children}) => {
  return <img src={children} />
}

Card.score = ({children}) => {
  return <div className="score">{children}</div>
}

Card.introduce = ({children}) => {
  return <div className="introduce">{children}</div>
}