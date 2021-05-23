import React, { useEffect, useState } from 'react';
import { Avatar } from "@material-ui/core";
import './SidebarChat.css';
import db from './firebase';
import { useHistory } from 'react-router-dom'

function SidebarChat({ id, name, roomkey, addNewChat }) {
    const [seed, setSeed] = useState("");
    const [, setMessages] = useState("");
    const history = useHistory();

    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt("Please Enter Name for Chat");
        const key = prompt("Please give a key to this room")

        if (roomName) {
            db.collection("rooms").add({
                name: roomName,
                key: key
            })
        }
    };

    const openRoom = () => {
        let passkey = prompt("what;s the key??")
        if (passkey === roomkey) {
            history.push(`/rooms/${id}`)
        } else {
            alert("Wrong key !")
        }

    }

    return !addNewChat ? (
        <div onClick={() => openRoom(id)} key={id}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat_info">
                    <h2>{name}</h2>
                </div>
            </div>
        </div>

    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h3 className="add-new-chat-title">Add New Chat</h3>
        </div>
    )
}

export default SidebarChat
