import { useState } from 'react'
import './App.css'
import { Card } from './Card'

const movieList = [
  {title: "기생충", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xKAm6pFOTpGqp3LdOuLHgJCHnyUqgXJMJ_d5eY13od-dBDe1BXGWJM4HBPSCn6KawtSlBkVJUUneLW-9G88GQjGVMgw4XYq5Aq9pCnY16A", score: "5.0", introduce: "직업도 없이 허름한 반지하에 사는 기택 가족에게 돈을 벌 기회가 찾아온다."},
  {title: "오징어게임", img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIADgAJgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAABwMFBgQC/8QAMRAAAgEDAwEGBAUFAAAAAAAAAQIDBBEhAAUSMQYTIkFRYXGRobEUMjPS4SMkQlLR/8QAGAEAAwEBAAAAAAAAAAAAAAAAAwQFAgH/xAAeEQADAQACAwEBAAAAAAAAAAAAAQIREiEDBEGhIv/aAAwDAQACEQMRAD8AWuy8Cz8rEr4r+3npsdkaoba1G7wlpZWHHBYqvKxYqM9fnpLw84XYFSeJI6Gx+enxuNZDtezUSwVHKJKde5dGJB5ZOb+oNvW46gHUv2v5aKPirVxLKv32sijldaeQBi5tckEH4dLi59tLPtFV/iKKSqpj3kJcYBvwNuht08taKHtDGtbxnkaGVkB5yxmxW1xf8t1OPa3odS9p3p927Lm7/ozriBVW5IGM3PkDfOCcY0FVSc8wnHgniEzPIed2NydGuiCnoZTMKyrMTqwCFejDNzkfDRqmhTG+zhkr6iVVE8zOqm4Bxb5aZGytVbvtUNBL4ZadY44BxaQMhyMqDgX6i+MaXVNCDIoVWc3HhADfQE6ZXYrdxSxD8LTdSAXUheP09tC9jFKw366ps9zdmN6ipSdyhqDBASkamxAz5XzYHPTORjUO71EFNtsdFUIBCsQZpJXdQJLXAwBawxb2tph0G/vdjUzN/T8Lc7YYi/p7/XWH7b7rDPSzskcZCkcjwByTbr/3S28qQwprGLPfKuCpq+VMyGO7ECOLgozgW+A8ydGvFUkckxcBVJ6g8f3aNUpxInVuku2VrUdVBURIFdW8Dlc+9vtrVbXuwkpBBSwKjq8jOb/qdPPzsBj3PudYqMM6CMcBZsMSB19T0t7n562NHT0V6aC8Kh0ZlMFUmJPCvFmUtnqScYYemM3KYTxc6eKsL0mZpJn/AN6hF7u+QLH83pg6rarcAOz8lWQhdq1YwXUOCO7bBFrFemDe2Nd1XQpWNV0NJTpHXJDx74zlVLck/wAbeE2uPLJscmwoK6lioNodHMj/ANshmjkYFe95xHktug43X1yMdToURofy3Vypn4n+/TL1KqkjOq3jLEKG6gYP2I0a8SyCQDiCD8b2+GjTCXQo67I4nKuCMEZxq0ozS+CaSuWGRnJaPu3JXOM8SLef86NGutaC0leshSecpVs6VNmlClgLghgDdRfP21x7lXz1A8VSZEY5UEgYAAuOmABo0a5nYRX1hX8ugHkNGjRrpg//2Q==", score: "5.0", introduce: "오징어 게임은 황동혁이 제작, 각본, 감독을 맡은 넷플릭스를 위해 제작, 각본, 감독을 맡은 대한민국의 디스토피아 생존 스릴러 TV 시리즈이다."}
]

function App() {
  
  return (
    <>
      {movieList?.map((movie)=>(
        <Card>
          <Card.header>{movie.title}</Card.header>
          <Card.image>{movie.img}</Card.image>
          <Card.score>{movie.score}</Card.score>
          <Card.introduce>{movie.introduce}</Card.introduce>
        </Card>
      ))}
    </>
  )
}

export default App
