import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './SidebarChat.css'
import db from '../firebase'
import { Link } from 'react-router-dom'

const SidebarChat = ({ id,name, addNewChat }) => {
 const [seed , setSeed] = useState("")
 const [ messages ,  setmessages] = useState("")

 useEffect(()=>{
  if(id){
    db.collection('rooms').doc(id).collection("messages")
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => setmessages(snapshot.docs.map(doc => doc.data())))
  }

 },[id])

   useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
   },[]) 

   const createChat = () => {
    const roomName =  prompt("Enter room name for chat")
     if(roomName) {
      db.collection('rooms').add({
         name: roomName,
          
      })
     }
  }


  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
    
    <div className='sidebarChat'>
         <Avatar src={`https://avatars.dicebear.com/api/human/b${seed}.svg`}/> 
         <div className="sidebarChat__info">
            <h4>{name}</h4>
            <p>{messages[0]?.message}</p>
        </div>
    </div>
    </Link>
  ):(
    <div  onClick={createChat} className='sidebarChat'>
      <h3>Add new chat</h3>
    </div>
  )
}

export default SidebarChat