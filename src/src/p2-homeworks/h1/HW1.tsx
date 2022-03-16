import React from 'react'
import Message from './Message'

const messageData = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <Message 
                message={messageData.message} 
                time={messageData.time} 
                avatar={messageData.avatar} 
                name={messageData.name} 
            />
        </div>
    )
}

export default HW1
