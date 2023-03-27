import React, { useState } from 'react'
import './SideBar.css'
import { Avatar,IconButton } from '@material-ui/core'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SidebarChat from './SidebarChat'
import { SearchOutlined } from '@material-ui/icons';
import db from '../firebase'
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

const SideBar = () => {
    const [rooms , setRooms] =useState([])
    // eslint-disable-next-line no-unused-vars
    const [{user}, dispatch] = useStateValue()

    useEffect (() => {
        db.collection('rooms').onSnapshot((snapshot) => (
            setRooms(snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))

    },[])
    console.log(user)
  return (

    <div className="sidebar">
        <div className="sidebar__header">

            <Avatar src={user?.multiFactor.user.photoURL}/>
            <div className="sidebar__headerRight">
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">
                <SearchOutlined />
                <input placeholder="Search or start new chat" type="text" />
            </div>
        </div>
        <div className="sidebar__chats">
            <SidebarChat addNewChat/>
             {
                rooms.map((room) => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))
             }

        </div>
    </div>
  )
}

export default SideBar