import React from 'react'
import Avatar from './tests/Avatar'
import MesageArea from './MessageArea';
import classes from './Message.module.css'




export type MessagePropsType = {
    message: string
    time: string
    avatar: string
    name: string
}

function Message(props: MessagePropsType) {

    return (


        <div className={classes.contaner}>

            <div className={classes.Avatar}>
                <img src={props.avatar} />
            </div>

            <div className={classes.MessageArea}>
                <div className={classes.Username}>{props.name}</div>
                <div>{props.message}</div>
                <div className={classes.time}>{props.time}</div>
            </div>

        </div>



    );
}

export default Message;


