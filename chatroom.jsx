import {useState, useEffect} from 'react'

export function ChatRoom(roomId) {
  const [serverurl, Setserverurl] = useState('')

  useEffect(() => {
    const options = {
      serverUrl :  serverUrl,
      roomId : roomId
    };
    const conneciton = createConnection(options)
    conneciton.on('message' (msg) => {
    })

  }
